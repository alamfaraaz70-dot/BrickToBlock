import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";
import { createServer } from "http";
import { Server } from "socket.io";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("bricktoblock.db");

// Initialize Database
try {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      role TEXT, -- 'user', 'engineer', 'admin'
      name TEXT,
      specialization TEXT, -- for engineers
      is_verified INTEGER DEFAULT 0,
      experience_years INTEGER DEFAULT 0,
      rating REAL DEFAULT 0,
      bio TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    
    -- Ensure at least one admin exists for testing
    INSERT OR IGNORE INTO users (email, password, role, name, is_verified) 
    VALUES ('admin@bricktoblock.com', 'admin123', 'admin', 'System Admin', 1);
    
    INSERT OR IGNORE INTO users (email, password, role, name, is_verified) 
    VALUES ('alamfaraaz70@gmail.com', 'admin123', 'admin', 'Faraaz Alam', 1);

    CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    plot_area REAL,
    floors INTEGER,
    rooms_per_floor INTEGER,
    budget REAL,
    location TEXT,
    style TEXT,
    work_type TEXT, -- 'full_home', 'civil', 'architectural', 'plumbing', 'electrical'
    requirements_json TEXT,
    material_quality TEXT DEFAULT 'Standard', -- 'Basic', 'Standard', 'Premium'
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS construction_estimates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER,
    cement REAL,
    bricks REAL,
    steel REAL,
    sand REAL,
    labor_cost REAL,
    material_cost REAL,
    total_cost REAL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(project_id) REFERENCES projects(id)
  );

  CREATE TABLE IF NOT EXISTS quotations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER,
    engineer_id INTEGER,
    price REAL,
    proposal TEXT,
    timeline TEXT,
    status TEXT DEFAULT 'pending', -- 'pending', 'accepted', 'rejected'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(engineer_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS project_documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER,
    name TEXT,
    url TEXT,
    uploaded_by INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(uploaded_by) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER,
    sender_id INTEGER,
    receiver_id INTEGER,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(project_id) REFERENCES projects(id)
  );
`);
} catch (e) {
  console.error("Database initialization error:", e);
}

async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer);
  const PORT = 3000;

  app.use(express.json());

  // Auth Endpoints
  app.post("/api/auth/register", (req, res) => {
    console.log("Registration attempt:", JSON.stringify(req.body));
    const { email, password, role, name, specialization, experience_years, bio } = req.body;
    
    if (!email || !password || !role || !name) {
      console.log("Registration failed: Missing fields");
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const stmt = db.prepare("INSERT INTO users (email, password, role, name, specialization, experience_years, bio) VALUES (?, ?, ?, ?, ?, ?, ?)");
      const result = stmt.run(
        email, 
        password, 
        role, 
        name, 
        specialization || null, 
        experience_years || 0, 
        bio || null
      );
      const user = db.prepare("SELECT * FROM users WHERE id = ?").get(result.lastInsertRowid);
      console.log("Registration successful:", email);
      res.json(user);
    } catch (e: any) {
      console.error("Registration error:", e.message);
      if (e.message.includes("UNIQUE constraint failed: users.email")) {
        res.status(400).json({ error: "Email already registered" });
      } else {
        res.status(400).json({ error: e.message });
      }
    }
  });

  app.post("/api/auth/login", (req, res) => {
    console.log("Login attempt:", JSON.stringify(req.body));
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    try {
      const user = db.prepare("SELECT * FROM users WHERE email = ? AND password = ?").get(email, password) as any;
      if (user) {
        console.log("Login successful:", email);
        res.json(user);
      } else {
        console.log("Login failed: Invalid credentials for", email);
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (e: any) {
      console.error("Login error:", e.message);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Project Endpoints
  app.post("/api/projects", (req, res) => {
    const { user_id, plot_area, floors, rooms_per_floor, budget, location, style, material_quality, work_type, requirements_json } = req.body;
    const stmt = db.prepare("INSERT INTO projects (user_id, plot_area, floors, rooms_per_floor, budget, location, style, material_quality, work_type, requirements_json) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    const result = stmt.run(user_id, plot_area, floors, rooms_per_floor, budget, location, style, material_quality || 'Standard', work_type, requirements_json || null);
    const projectId = result.lastInsertRowid;

    // Calculate Construction Estimate
    // Mock calculation logic
    const area = Number(plot_area);
    const floorCount = Number(floors);
    const qualityMultiplier = material_quality === 'Premium' ? 1.5 : (material_quality === 'Basic' ? 0.8 : 1);
    
    const cement = area * floorCount * 0.4 * qualityMultiplier; // bags
    const bricks = area * floorCount * 20 * qualityMultiplier;
    const steel = area * floorCount * 4 * qualityMultiplier; // kg
    const sand = area * floorCount * 1.2 * qualityMultiplier; // cu ft
    
    const labor_cost = area * floorCount * 250 * qualityMultiplier;
    const material_cost = (cement * 500) + (bricks * 10) + (steel * 70) + (sand * 50);
    const total_cost = labor_cost + material_cost;

    const estStmt = db.prepare("INSERT INTO construction_estimates (project_id, cement, bricks, steel, sand, labor_cost, material_cost, total_cost) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    estStmt.run(projectId, cement, bricks, steel, sand, labor_cost, material_cost, total_cost);

    res.json({ id: projectId });
  });

  app.get("/api/projects", (req, res) => {
    const { role, userId } = req.query;
    let projects;
    if (role === 'engineer') {
      // Engineers see projects that match their specialization or all 'full_home' projects
      const engineer = db.prepare("SELECT specialization FROM users WHERE id = ?").get(userId) as any;
      const spec = engineer?.specialization?.toLowerCase();
      
      // Map specialization to work_type
      // 'Civil', 'Architectural', 'Plumbing', 'Electrical'
      let targetWorkType = '';
      if (spec === 'civil') targetWorkType = 'civil';
      else if (spec === 'architectural') targetWorkType = 'architectural';
      else if (spec === 'plumbing') targetWorkType = 'plumbing';
      else if (spec === 'electrical') targetWorkType = 'electrical';

      if (targetWorkType) {
        projects = db.prepare(`
          SELECT p.*, u.name as user_name 
          FROM projects p 
          JOIN users u ON p.user_id = u.id 
          WHERE p.work_type = 'full_home' OR p.work_type = ?
        `).all(targetWorkType);
      } else {
        projects = db.prepare("SELECT p.*, u.name as user_name FROM projects p JOIN users u ON p.user_id = u.id WHERE p.work_type = 'full_home'").all();
      }
    } else if (role === 'user') {
      projects = db.prepare("SELECT * FROM projects WHERE user_id = ?").all(userId);
    } else {
      projects = db.prepare("SELECT * FROM projects").all();
    }
    res.json(projects);
  });

  app.get("/api/projects/:id", (req, res) => {
    const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(req.params.id);
    const estimate = db.prepare("SELECT * FROM construction_estimates WHERE project_id = ?").get(req.params.id);
    const quotations = db.prepare("SELECT q.*, u.name as engineer_name, u.specialization as engineer_specialization, u.rating as engineer_rating FROM quotations q JOIN users u ON q.engineer_id = u.id WHERE q.project_id = ?").all(req.params.id);
    const documents = db.prepare("SELECT * FROM project_documents WHERE project_id = ?").all(req.params.id);
    res.json({ project, estimate, quotations, documents });
  });

  // Quotation Endpoints
  app.post("/api/quotations", (req, res) => {
    const { project_id, engineer_id, price, proposal, timeline } = req.body;
    const stmt = db.prepare("INSERT INTO quotations (project_id, engineer_id, price, proposal, timeline) VALUES (?, ?, ?, ?, ?)");
    const result = stmt.run(project_id, engineer_id, price, proposal, timeline);
    res.json({ id: result.lastInsertRowid });
  });

  app.patch("/api/quotations/:id/status", (req, res) => {
    const { status } = req.body;
    db.prepare("UPDATE quotations SET status = ? WHERE id = ?").run(status, req.params.id);
    if (status === 'accepted') {
      const quote = db.prepare("SELECT project_id FROM quotations WHERE id = ?").get(req.params.id) as any;
      db.prepare("UPDATE projects SET status = 'in_progress' WHERE id = ?").run(quote.project_id);
    }
    res.json({ success: true });
  });

  // Document Endpoints
  app.post("/api/documents", (req, res) => {
    const { project_id, name, url, uploaded_by } = req.body;
    const stmt = db.prepare("INSERT INTO project_documents (project_id, name, url, uploaded_by) VALUES (?, ?, ?, ?)");
    const result = stmt.run(project_id, name, url, uploaded_by);
    res.json({ id: result.lastInsertRowid });
  });

  // Engineer Marketplace
  app.get("/api/engineers", (req, res) => {
    const { specialization } = req.query;
    let engineers;
    if (specialization) {
      engineers = db.prepare("SELECT id, name, email, specialization, experience_years, rating, bio FROM users WHERE role = 'engineer' AND specialization = ? AND is_verified = 1").all(specialization);
    } else {
      engineers = db.prepare("SELECT id, name, email, specialization, experience_years, rating, bio FROM users WHERE role = 'engineer' AND is_verified = 1").all();
    }
    res.json(engineers);
  });

  app.get("/api/admin/engineers", (req, res) => {
    const engineers = db.prepare("SELECT * FROM users WHERE role = 'engineer'").all();
    res.json(engineers);
  });

  app.patch("/api/admin/engineers/:id/verify", (req, res) => {
    db.prepare("UPDATE users SET is_verified = 1 WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  // Socket.io for Chat
  io.on("connection", (socket) => {
    socket.on("join", (projectId) => {
      socket.join(`project_${projectId}`);
    });

    socket.on("sendMessage", (data) => {
      const { project_id, sender_id, receiver_id, content } = data;
      const stmt = db.prepare("INSERT INTO messages (project_id, sender_id, receiver_id, content) VALUES (?, ?, ?, ?)");
      stmt.run(project_id, sender_id, receiver_id, content);
      io.to(`project_${project_id}`).emit("message", data);
    });

    socket.on("getMessages", (projectId) => {
      const messages = db.prepare("SELECT * FROM messages WHERE project_id = ? ORDER BY created_at ASC").all(projectId);
      socket.emit("loadMessages", messages);
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
