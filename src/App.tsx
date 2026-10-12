import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate, useParams } from 'react-router-dom';
import { 
  Home, 
  Layout, 
  User as UserIcon, 
  HardHat, 
  Settings, 
  Plus, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  MapPin, 
  IndianRupee,
  LogOut,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Zap,
  Send,
  X,
  Maximize2,
  Star,
  Users,
  Briefcase,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Building2,
  Shield,
  FileText,
  TrendingUp,
  PieChart as PieChartIcon,
  Search,
  Filter,
  Award,
  Calendar,
  Layers,
  Droplets,
  ClipboardList,
  Construction,
  AirVent,
  Refrigerator,
  WashingMachine,
  Waves,
  Microwave,
  Flame,
  Car,
  Lightbulb,
  Fan,
  ToggleRight,
  Smartphone,
  Eye,
  Battery,
  Sun,
  Cctv,
  Bell,
  Trees,
  ParkingCircle,
  DoorOpen,
  Warehouse,
  Upload,
  Bath,
  Utensils,
  Trash2,
  CloudRain,
  Activity,
  Wrench,
  Pipette,
  Ruler,
  Compass,
  Bed,
  Tv,
  Coffee,
  Library,
  Flower2,
  Box,
  ArrowUpCircle,
  Sparkles,
  Mountain,
  Hammer,
  Truck,
  Timer,
  FileCheck,
  Shovel
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend 
} from 'recharts';
import { User, Project, ConstructionEstimate, Quotation, ProjectDocument, Message } from './types';

// --- Components ---

const Navbar = ({ user, onLogout }: { user: User | null, onLogout: () => void }) => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-pro-navy rounded-xl flex items-center justify-center shadow-lg shadow-pro-navy/20">
              <Construction className="text-pro-emerald w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold text-pro-navy tracking-tight">BrickToBlock</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <div className="relative group">
              <a href="#features" className="text-sm font-bold text-slate-500 hover:text-pro-navy transition-colors uppercase tracking-widest flex items-center gap-1">
                Features <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </a>
              <div className="absolute top-full -left-4 w-80 bg-white shadow-2xl rounded-3xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-2 z-50">
                <div className="space-y-4">
                  {[
                    "Architect / Map Building",
                    "Civil Work Planning",
                    "Electrical Work Planning",
                    "Plumbing Work Planning",
                    "Multi-Engineer Collaboration",
                    "Budget-Based Planning",
                    "Document Upload",
                    "Engineer Dashboard",
                    "Quotation System",
                    "Complete Construction Planning"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/item cursor-pointer">
                      <div className="w-1.5 h-1.5 rounded-full bg-pro-emerald opacity-20 group-hover/item:opacity-100 transition-all" />
                      <span className="text-[11px] font-bold text-slate-500 group-hover/item:text-pro-navy transition-colors uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <a href="#how-it-works" className="text-sm font-bold text-slate-500 hover:text-pro-navy transition-colors uppercase tracking-widest flex items-center gap-1">
                How it Works <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </a>
              <div className="absolute top-full -left-4 w-96 bg-white shadow-2xl rounded-3xl border border-slate-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-2 z-50">
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Our app is a smart home construction platform that helps users plan and build their houses by connecting them with professional engineers in one place. Choose services like Full Home Building or specialized work, answer step-by-step questions, and get professional designs and quotations directly from verified engineers. 🏠🚀
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                   <a href="#how-it-works" className="text-pro-emerald text-xs font-bold uppercase tracking-widest hover:underline">Learn more about the process</a>
                </div>
              </div>
            </div>
            <Link to="/marketplace" className="text-sm font-bold text-slate-500 hover:text-pro-navy transition-colors uppercase tracking-widest">Marketplace</Link>
            {user ? (
              <div className="flex items-center gap-6 pl-6 border-l border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                    <UserIcon className="w-5 h-5 text-pro-navy" />
                  </div>
                  <div className="hidden lg:block">
                    <div className="text-xs font-bold text-pro-navy uppercase tracking-widest">{user.name}</div>
                    <div className="text-[10px] font-bold text-pro-emerald uppercase tracking-widest">{user.role}</div>
                  </div>
                </div>
                <button 
                  onClick={onLogout}
                  className="bg-slate-50 text-slate-500 px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all uppercase tracking-widest"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-pro-navy text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-pro-navy/90 transition-all shadow-xl shadow-pro-navy/20 uppercase tracking-widest"
              >
                Access Platform
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-pro-navy text-white pt-24 pb-12 border-t border-white/5">
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="bg-pro-emerald p-2 rounded-lg">
              <HardHat className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">BrickToBlock</span>
          </Link>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Revolutionizing the construction industry with AI-driven design and verified professional collaboration.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-pro-emerald transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-8 text-white">Platform</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-pro-emerald transition-colors">AI Blueprinting</a></li>
            <li><a href="#" className="hover:text-pro-emerald transition-colors">Expert Network</a></li>
            <li><a href="#" className="hover:text-pro-emerald transition-colors">Cost Estimator</a></li>
            <li><a href="#" className="hover:text-pro-emerald transition-colors">Project Tracking</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-8 text-white">Company</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-pro-emerald transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-pro-emerald transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-pro-emerald transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-pro-emerald transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-8 text-white">Contact Us</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-pro-emerald" />
              <span>support@bricktoblock.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-pro-emerald" />
              <span>+1 (555) 000-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-pro-emerald" />
              <span>123 Construction Way, Builder City</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
        <p>© 2026 BrickToBlock. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = () => (
  <div className="flex flex-col">
    {/* Hero Section */}
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-pro-navy">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=1920&q=80" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-pro-navy via-pro-navy/80 to-transparent" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-pro-emerald/10 text-pro-emerald px-4 py-2 rounded-full font-bold text-xs mb-8 uppercase tracking-widest border border-pro-emerald/20">
              <div className="w-2 h-2 bg-pro-emerald rounded-full animate-pulse" />
              Professional Construction Management
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[1.1] mb-8">
              Build With <br />
              <span className="text-pro-emerald">Certainty.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-xl font-medium leading-relaxed">
              BrickToBlock provides professional construction estimates and connects you with verified engineers to manage your build with absolute precision.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/login" className="bg-pro-emerald text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-pro-emerald/90 transition-all shadow-2xl shadow-pro-emerald/30 flex items-center gap-3 group">
                GET COST ESTIMATE
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/login" className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 font-bold rounded-2xl hover:bg-white/10 transition-all">
                Hire Engineers
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-pro-emerald rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold">Cost Estimator</div>
                  <div className="text-slate-400 text-xs">Accurate material & labor breakdown</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-pro-emerald font-bold text-xl">Cement</div>
                    <div className="text-slate-400 text-[10px] uppercase font-bold">450 Bags</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-pro-emerald font-bold text-xl">Bricks</div>
                    <div className="text-slate-400 text-[10px] uppercase font-bold">12,000 Units</div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase font-bold">Total Estimate</div>
                    <div className="text-white font-bold text-2xl">₹145,000</div>
                  </div>
                  <PieChartIcon className="text-pro-emerald w-8 h-8" />
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-pro-emerald/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-pro-blue/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-pro-navy border-y border-white/5">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Projects Managed", value: "2,500+", icon: Building2 },
            { label: "Verified Engineers", value: "450+", icon: Users },
            { label: "Success Rate", value: "99.9%", icon: ShieldCheck },
            { label: "Capital Managed", value: "₹1.2B+", icon: IndianRupee }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 text-pro-emerald">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section id="features" className="py-32 bg-white construction-grid">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="text-pro-emerald font-bold uppercase tracking-widest text-sm mb-4">Platform Features</div>
            <h2 className="text-5xl font-display font-bold leading-tight mb-6">
              Complete <span className="text-slate-400">Construction</span> Planning
            </h2>
            <p className="text-slate-500 text-lg font-medium">Everything you need to manage your house design, construction, electrical, and plumbing planning in one single platform.</p>
          </div>
          <div className="text-9xl font-display font-bold text-slate-50 select-none">01</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Architect / Map Building",
              desc: "Enter plot size, floors, and style. Architects design your building map and floor plan accurately.",
              icon: <FileText className="w-8 h-8" />,
            },
            {
              title: "Civil Work Planning",
              desc: "Provide construction details for review. Engineers provide material estimation, labor cost, and timelines.",
              icon: <HardHat className="w-8 h-8" />,
            },
            {
              title: "Electrical Work Planning",
              desc: "Define requirements for lights, fans, and appliances. Get wiring layouts and load estimations.",
              icon: <Zap className="w-8 h-8" />,
            },
            {
              title: "Plumbing Work Planning",
              desc: "Enter water supply and drainage details. Get professional pipe layouts and tank requirements.",
              icon: <Droplets className="w-8 h-8" />,
            },
            {
              title: "Multi-Engineer Collaboration",
              desc: "Connect with Architects, Civil, Electrical, and Plumbing engineers in one organized platform.",
              icon: <Users className="w-8 h-8" />,
            },
            {
              title: "Budget-Based Planning",
              desc: "Choose from Basic, Standard, or Premium construction. Engineers design according to your budget.",
              icon: <IndianRupee className="w-8 h-8" />,
            },
            {
              title: "Document Upload",
              desc: "Upload plot documents, blueprints, and soil reports for more accurate and professional designs.",
              icon: <Upload className="w-8 h-8" />,
            },
            {
              title: "Engineer Dashboard",
              desc: "Engineers can analyze requirements and send construction plans, cost estimations, and timelines.",
              icon: <Layout className="w-8 h-8" />,
            },
            {
              title: "Quotation System",
              desc: "Receive detailed cost quotations directly from professionals through the integrated app system.",
              icon: <ClipboardList className="w-8 h-8" />,
            },
            {
              title: "Complete Construction Planning",
              desc: "Manage house design, construction, electrical, and plumbing planning all in one single platform.",
              icon: <Building2 className="w-8 h-8" />,
            }
          ].map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="industrial-card group border-none shadow-xl shadow-slate-200/50 h-full"
            >
              <div className="p-10">
                <div className="bg-pro-emerald/10 text-pro-emerald w-16 h-16 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-pro-emerald group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section id="how-it-works" className="py-32 bg-slate-50">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="text-pro-emerald font-bold uppercase tracking-widest text-sm mb-4">The Process</div>
          <h2 className="text-5xl font-display font-bold mb-8 text-pro-navy">How BrickToBlock Works</h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Our app is a smart home construction platform that helps users plan and build their houses by connecting them with professional engineers in one place. When a user opens the app, they can choose services such as Full Home Building, Architect / Map Building, Civil Work, Electrical Work, or Plumbing Work. After selecting a service, the app asks the user a series of step-by-step questions to collect important details about their project, such as plot size, number of floors, room requirements, construction materials, electrical needs, plumbing systems, budget, and timeline. The user can also upload documents like plot maps or blueprints. Once the information is submitted, the data is sent to the relevant engineers—such as architects, civil engineers, electrical engineers, and plumbing engineers—through their dashboard. These professionals review the project details and provide building designs, material estimates, labor costs, and construction timelines. The user can then view the quotation in the app, communicate with engineers if needed, and proceed with the construction planning process. This allows homeowners to manage the entire house construction process easily from a single platform. 🏠🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Estimate Cost", desc: "Input your plot size and requirements to get a detailed cost breakdown.", icon: TrendingUp },
            { step: "02", title: "Hire Experts", desc: "Browse our marketplace and hire verified engineers for your project.", icon: Users },
            { step: "03", title: "Get Quotations", desc: "Engineers send detailed proposals and quotations for your review.", icon: ClipboardList },
            { step: "04", title: "Build Ready", desc: "Collaborate with your team and track progress through completion.", icon: CheckCircle }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative z-10 h-full">
                <div className="text-6xl font-display font-bold text-slate-50 mb-8 group-hover:text-pro-emerald/10 transition-colors">{item.step}</div>
                <div className="w-12 h-12 rounded-xl bg-pro-emerald/10 text-pro-emerald flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-pro-navy mb-4">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-0 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-slate-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-32 bg-pro-emerald relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pro-navy blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="container mx-auto px-8 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-12 leading-tight">
          Ready to Build <br /> Your Masterpiece?
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/login" className="bg-pro-navy text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-pro-navy/90 transition-all shadow-2xl shadow-pro-navy/30">
            GET STARTED NOW
          </Link>
          <button className="bg-white text-pro-emerald px-12 py-6 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-2xl shadow-white/20">
            CONTACT SALES
          </button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

const AuthPage = ({ onLogin }: { onLogin: (user: User) => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'user' | 'engineer'>('user');
  const [specialization, setSpecialization] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const body = isLogin ? { email, password } : { email, password, role, name, specialization };
    
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      
      let data;
      try {
        data = await res.json();
      } catch (parseErr) {
        throw new Error('Server returned an invalid response');
      }

      if (res.ok) {
        onLogin(data);
        navigate('/');
      } else {
        alert(data.error || 'An error occurred during authentication');
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      alert(err.message || 'Connection error. Please check if the server is running.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center bg-slate-50 construction-grid p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="industrial-card p-12 w-full max-w-md border-none shadow-2xl shadow-slate-200"
      >
        <div className="flex justify-center mb-10">
          <div className="bg-pro-emerald/10 p-5 rounded-2xl border border-pro-emerald/20">
            <HardHat className="w-10 h-10 text-pro-emerald" />
          </div>
        </div>
        <h2 className="text-4xl font-display font-bold text-pro-navy mb-3 text-center">{isLogin ? 'Welcome Back' : 'Join the Network'}</h2>
        <p className="text-slate-500 mb-10 text-center font-medium">{isLogin ? 'Access your professional dashboard' : 'Start building with verified experts'}</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                  placeholder="John Doe"
                  required 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Designation</label>
                <select 
                  value={role} 
                  onChange={(e) => setRole(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none font-medium appearance-none bg-white"
                >
                  <option value="user">Home Owner</option>
                  <option value="engineer">Certified Engineer</option>
                </select>
              </div>
              {role === 'engineer' && (
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Specialization</label>
                  <select 
                    value={specialization} 
                    onChange={(e) => setSpecialization(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none font-medium appearance-none bg-white"
                    required
                  >
                    <option value="">Select Field</option>
                    <option value="Structural">Structural</option>
                    <option value="Civil">Civil</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Architectural">Architectural</option>
                  </select>
                </div>
              )}
            </>
          )}
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
              placeholder="name@company.com"
              required 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Security Code</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
              placeholder="••••••••"
              required 
            />
          </div>
          <button 
            type="submit"
            className="bg-pro-emerald text-white w-full mt-6 py-5 rounded-2xl font-bold text-lg hover:bg-pro-emerald/90 transition-all shadow-xl shadow-pro-emerald/20"
          >
            {isLogin ? 'ENTER SITE' : 'REGISTER NOW'}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm font-semibold text-pro-emerald hover:text-pro-emerald/80 transition-colors"
          >
            {isLogin ? "Need an account? Sign Up" : "Already registered? Sign In"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const UserDashboard = ({ user }: { user: User }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/projects?role=user&userId=${user.id}`)
      .then(res => res.json())
      .then(setProjects);
  }, [user.id]);

  return (
    <div className="p-12 max-w-7xl mx-auto construction-grid min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <div className="flex items-center gap-3 text-slate-400 mb-4 font-bold">
            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
              <Layout className="w-4 h-4 text-pro-emerald" />
            </div>
            <span className="text-xs uppercase tracking-widest">Project Control Center</span>
          </div>
          <h1 className="text-6xl font-display font-bold text-pro-navy leading-none">My <span className="text-slate-300">Projects</span></h1>
        </div>
        <Link 
          to="/new-project"
          className="bg-pro-navy text-white px-10 py-5 rounded-2xl font-bold text-sm flex items-center gap-3 hover:bg-pro-navy/90 transition-all shadow-xl shadow-pro-navy/20"
        >
          <Plus className="w-5 h-5 text-pro-emerald" />
          START NEW PROJECT
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map(project => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 group cursor-pointer"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="h-48 bg-slate-50 relative flex items-center justify-center overflow-hidden">
              <div className="absolute top-6 left-6 bg-pro-emerald text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-pro-emerald/20">
                {project.status}
              </div>
              <Building2 className="w-20 h-20 text-slate-200 group-hover:text-pro-emerald/20 transition-colors duration-500" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold text-pro-navy mb-6 group-hover:text-pro-emerald transition-colors">{project.location} Project</h3>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <MapPin className="w-4 h-4 text-pro-emerald" /> {project.location}
                </div>
                <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <Layers className="w-4 h-4 text-pro-emerald" /> {project.plot_area} SQ FT • {project.floors} Floors
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Estimated Budget</div>
                  <div className="text-xl font-display font-bold text-pro-navy">₹{project.budget.toLocaleString()}</div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-pro-navy uppercase tracking-widest">View Details</span>
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-pro-navy group-hover:text-white transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {projects.length === 0 && (
          <div className="col-span-full py-32 text-center bg-white rounded-3xl border-2 border-dashed border-slate-100">
            <div className="bg-slate-50 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-slate-100 shadow-inner">
              <Plus className="w-12 h-12 text-slate-300" />
            </div>
            <h3 className="text-3xl font-display font-bold text-pro-navy">No Active Projects</h3>
            <p className="text-slate-500 mt-3 font-medium max-w-md mx-auto">Start your first construction project to get cost estimates and hire verified engineers.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ElectricalProjectForm = ({ user, onBack }: { user: User, onBack: () => void }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    houseType: 'Independent house',
    plotArea: '',
    floors: '1',
    roomsPerFloor: '3',
    location: '',
    appliances: [] as string[],
    otherAppliances: '',
    wiringType: 'Concealed',
    materialPreference: 'Standard',
    rooms: [] as { id: number, name: string, lights: number, fans: number, sockets: number, switchboards: number }[],
    specialFeatures: [] as string[],
    outdoorWork: [] as string[],
    budgetCategory: 'Standard',
    constructionStage: 'Before plaster stage',
  });

  useEffect(() => {
    const totalRooms = Number(formData.floors) * Number(formData.roomsPerFloor);
    const newRooms = Array.from({ length: totalRooms }, (_, i) => ({
      id: i + 1,
      name: `Room ${i + 1}`,
      lights: 2,
      fans: 1,
      sockets: 2,
      switchboards: 1
    }));
    setFormData(prev => ({ ...prev, rooms: newRooms }));
  }, [formData.floors, formData.roomsPerFloor]);

  const applianceOptions = [
    { id: 'ac', name: 'Air Conditioner', load: 1.5, icon: AirVent },
    { id: 'fridge', name: 'Refrigerator', load: 0.3, icon: Refrigerator },
    { id: 'wm', name: 'Washing Machine', load: 0.5, icon: WashingMachine },
    { id: 'geyser', name: 'Geyser', load: 2.0, icon: Waves },
    { id: 'microwave', name: 'Microwave', load: 1.2, icon: Microwave },
    { id: 'induction', name: 'Induction Stove', load: 2.0, icon: Flame },
    { id: 'ev', name: 'EV Charger', load: 3.0, icon: Car },
  ];

  const specialFeaturesOptions = [
    { id: 'smart', name: 'Smart Home Automation', icon: Smartphone },
    { id: 'motion', name: 'Motion Sensor Lighting', icon: Eye },
    { id: 'led', name: 'LED Strip Lighting', icon: Lightbulb },
    { id: 'inverter', name: 'Inverter / Power Backup', icon: Battery },
    { id: 'solar', name: 'Solar Panel Wiring', icon: Sun },
    { id: 'cctv', name: 'CCTV Wiring', icon: Cctv },
    { id: 'doorbell', name: 'Video Doorbell', icon: Bell },
  ];

  const outdoorOptions = [
    { id: 'garden', name: 'Garden Lighting', icon: Trees },
    { id: 'parking', name: 'Parking Lighting', icon: ParkingCircle },
    { id: 'gate', name: 'Gate Motor Wiring', icon: DoorOpen },
    { id: 'terrace', name: 'Terrace Lighting', icon: Warehouse },
  ];

  const calculateTotalLoad = () => {
    let load = formData.appliances.reduce((acc, curr) => {
      const app = applianceOptions.find(a => a.id === curr);
      return acc + (app?.load || 0);
    }, 0);
    if (formData.otherAppliances) load += 0.5;
    return load.toFixed(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          user_id: user.id, 
          plot_area: Number(formData.plotArea), 
          floors: Number(formData.floors), 
          rooms_per_floor: Number(formData.roomsPerFloor), 
          budget: formData.budgetCategory === 'Premium' ? 500000 : (formData.budgetCategory === 'Standard' ? 250000 : 100000), 
          location: formData.location, 
          style: 'Electrical',
          material_quality: formData.materialPreference as any,
          work_type: 'electrical',
          requirements_json: JSON.stringify({
            ...formData,
            estimatedLoad: calculateTotalLoad()
          })
        })
      });
      const project = await res.json();
      navigate(`/project/${project.id}`);
    } catch (err) {
      console.error(err);
      alert("Error creating project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleItem = (listName: 'appliances' | 'specialFeatures' | 'outdoorWork', id: string) => {
    setFormData(prev => {
      const list = prev[listName];
      if (list.includes(id)) {
        return { ...prev, [listName]: list.filter(item => item !== id) };
      } else {
        return { ...prev, [listName]: [...list, id] };
      }
    });
  };

  const updateRoom = (id: number, field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      rooms: prev.rooms.map(r => r.id === id ? { ...r, [field]: value } : r)
    }));
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">House Type</label>
                <div className="grid grid-cols-3 gap-4">
                  {['Apartment', 'Independent house', 'Villa'].map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, houseType: t }))}
                      className={`py-3 rounded-xl border-2 transition-all font-bold text-[10px] ${formData.houseType === t ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Site Location</label>
                <input 
                  type="text" 
                  value={formData.location} 
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                  placeholder="City, State"
                  required 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Total Area (SQ FT)</label>
                <input 
                  type="number" 
                  value={formData.plotArea} 
                  onChange={(e) => setFormData(prev => ({ ...prev, plotArea: e.target.value }))}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                  placeholder="e.g. 1500"
                  required 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Floors</label>
                <input 
                  type="number" 
                  value={formData.floors} 
                  onChange={(e) => setFormData(prev => ({ ...prev, floors: e.target.value }))}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                  required 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Rooms per Floor</label>
                <input 
                  type="number" 
                  value={formData.roomsPerFloor} 
                  onChange={(e) => setFormData(prev => ({ ...prev, roomsPerFloor: e.target.value }))}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                  required 
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Select Appliances</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {applianceOptions.map(app => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => toggleItem('appliances', app.id)}
                    className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${formData.appliances.includes(app.id) ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
                  >
                    <app.icon className="w-8 h-8" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-center">{app.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Other Appliances</label>
              <input 
                type="text" 
                value={formData.otherAppliances} 
                onChange={(e) => setFormData(prev => ({ ...prev, otherAppliances: e.target.value }))}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                placeholder="e.g. Dishwasher, Home Theater"
              />
            </div>
            <div className="bg-pro-navy p-6 rounded-2xl flex justify-between items-center">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Total Load</div>
                <div className="text-2xl font-display font-bold text-white">{calculateTotalLoad()} kW</div>
              </div>
              <Zap className="w-8 h-8 text-pro-emerald" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Wiring Preference</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Concealed', 'Surface'].map(w => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, wiringType: w }))}
                      className={`py-4 rounded-xl border-2 transition-all font-bold text-xs ${formData.wiringType === w ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {w} Wiring
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Material Preference</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Standard', 'Premium'].map(m => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, materialPreference: m }))}
                      className={`py-4 rounded-xl border-2 transition-all font-bold text-xs ${formData.materialPreference === m ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {m} Materials
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
            {formData.rooms.map(room => (
              <div key={room.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-pro-navy mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pro-emerald rounded-full" />
                  {room.name}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Lights</label>
                    <input 
                      type="number" 
                      value={room.lights} 
                      onChange={(e) => updateRoom(room.id, 'lights', Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none focus:border-pro-emerald"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Fans</label>
                    <input 
                      type="number" 
                      value={room.fans} 
                      onChange={(e) => updateRoom(room.id, 'fans', Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none focus:border-pro-emerald"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Sockets</label>
                    <input 
                      type="number" 
                      value={room.sockets} 
                      onChange={(e) => updateRoom(room.id, 'sockets', Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none focus:border-pro-emerald"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Switchboards</label>
                    <input 
                      type="number" 
                      value={room.switchboards} 
                      onChange={(e) => updateRoom(room.id, 'switchboards', Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none focus:border-pro-emerald"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 5:
        return (
          <div className="space-y-10">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Special Features</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {specialFeaturesOptions.map(feat => (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleItem('specialFeatures', feat.id)}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${formData.specialFeatures.includes(feat.id) ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
                  >
                    <feat.icon className="w-6 h-6" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-center">{feat.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Outdoor Electrical Work</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {outdoorOptions.map(out => (
                  <button
                    key={out.id}
                    type="button"
                    onClick={() => toggleItem('outdoorWork', out.id)}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${formData.outdoorWork.includes(out.id) ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
                  >
                    <out.icon className="w-6 h-6" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-center">{out.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Budget Preference</label>
                <div className="space-y-3">
                  {['Basic', 'Standard', 'Premium'].map(b => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, budgetCategory: b }))}
                      className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${formData.budgetCategory === b ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      <span className="font-bold text-xs">{b} Setup</span>
                      {formData.budgetCategory === b && <CheckCircle className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Construction Stage</label>
                <div className="space-y-3">
                  {['Before plaster stage', 'After plaster stage', 'Renovation stage'].map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, constructionStage: s }))}
                      className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${formData.constructionStage === s ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      <span className="font-bold text-xs">{s}</span>
                      {formData.constructionStage === s && <CheckCircle className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">House Blueprint (Optional)</label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-pro-emerald transition-colors cursor-pointer">
                <Upload className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                <p className="text-sm font-bold text-pro-navy">Click to upload floor plan</p>
                <p className="text-xs text-slate-400 mt-1">PDF, JPG or PNG (Max 5MB)</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const steps = [
    { id: 1, name: 'Basic Info' },
    { id: 2, name: 'Appliances' },
    { id: 3, name: 'Wiring' },
    { id: 4, name: 'Rooms' },
    { id: 5, name: 'Features' },
    { id: 6, name: 'Finalize' },
  ];

  return (
    <div className="space-y-12">
      {/* Progress Indicator */}
      <div className="flex justify-between items-center px-4">
        {steps.map((s, i) => (
          <React.Fragment key={s.id}>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all ${step >= s.id ? 'bg-pro-emerald text-white shadow-lg shadow-pro-emerald/20' : 'bg-slate-100 text-slate-400'}`}>
                {s.id}
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-widest ${step >= s.id ? 'text-pro-navy' : 'text-slate-400'}`}>{s.name}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 transition-all ${step > s.id ? 'bg-pro-emerald' : 'bg-slate-100'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="min-h-[400px]">
        {renderStep()}
      </div>

      <div className="pt-8 flex gap-4">
        <button 
          type="button"
          onClick={() => step === 1 ? onBack() : setStep(step - 1)}
          className="px-8 py-4 rounded-2xl font-bold text-sm bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"
        >
          {step === 1 ? 'CANCEL' : 'BACK'}
        </button>
        {step < 6 ? (
          <button 
            type="button"
            onClick={() => setStep(step + 1)}
            className="bg-pro-navy text-white flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-pro-navy/90 transition-all shadow-xl shadow-pro-navy/20"
          >
            CONTINUE
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button 
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-pro-emerald text-white flex-1 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-4 hover:bg-pro-emerald/90 transition-all shadow-xl shadow-pro-emerald/20 disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                SUBMITTING...
              </>
            ) : (
              <>
                <CheckCircle className="w-6 h-6" />
                SUBMIT REQUIREMENTS
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const PlumbingProjectForm = ({ user, onBack }: { user: User, onBack: () => void }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Section 1: Basic
    floors: '1',
    bathrooms: '2',
    kitchens: '1',
    area: '',
    houseType: 'Independent house',
    // Section 2: Water Source
    waterSource: 'Municipal water supply',
    undergroundTank: false,
    overheadTank: false,
    // Section 3: Bathroom
    washBasins: '2',
    toilets: '2',
    showers: '2',
    geyserConnection: false,
    bathtub: false,
    // Section 4: Kitchen
    kitchenSinks: '1',
    dishwasher: false,
    waterPurifier: false,
    // Section 5: Drainage
    drainageSystem: 'Sewage line connection',
    rainwaterDrainage: false,
    rainwaterHarvesting: false,
    // Section 6: Outdoor
    gardenTaps: false,
    carWashTap: false,
    terraceOutlet: false,
    swimmingPool: false,
    // Section 7: Pipe Material
    pipeMaterial: 'CPVC pipes',
    // Section 8: Features
    solarHeater: false,
    pressurePump: false,
    greywaterRecycling: false,
    smartMonitoring: false,
    // Section 9: Budget
    budgetCategory: 'Standard plumbing setup',
    // Section 10: Blueprint
    blueprint: null as File | null
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simple cost estimation logic for plumbing
      let estimatedBudget = 50000; // Base
      if (formData.budgetCategory === 'Standard plumbing setup') estimatedBudget = 150000;
      if (formData.budgetCategory === 'Premium plumbing setup') estimatedBudget = 350000;

      // Add costs based on bathrooms/kitchens
      estimatedBudget += (Number(formData.bathrooms) * 25000);
      estimatedBudget += (Number(formData.kitchens) * 15000);
      if (formData.swimmingPool) estimatedBudget += 100000;
      if (formData.solarHeater) estimatedBudget += 40000;

      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.id,
          plot_area: Number(formData.area),
          floors: Number(formData.floors),
          rooms_per_floor: Math.ceil((Number(formData.bathrooms) + Number(formData.kitchens)) / Number(formData.floors)),
          budget: estimatedBudget,
          location: 'To be specified',
          style: formData.houseType,
          material_quality: formData.budgetCategory.split(' ')[0] as any,
          work_type: 'plumbing',
          requirements_json: JSON.stringify(formData)
        })
      });

      const project = await res.json();
      navigate(`/project/${project.id}`);
    } catch (err) {
      console.error(err);
      alert("Error creating plumbing project.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, title: 'Basic Info', icon: Home },
    { id: 2, title: 'Water Source', icon: Droplets },
    { id: 3, title: 'Bathrooms', icon: Bath },
    { id: 4, title: 'Kitchen', icon: Utensils },
    { id: 5, title: 'Drainage', icon: Trash2 },
    { id: 6, title: 'Outdoor', icon: Trees },
    { id: 7, title: 'Materials', icon: Pipette },
    { id: 8, title: 'Features', icon: Activity },
    { id: 9, title: 'Budget', icon: IndianRupee },
    { id: 10, title: 'Blueprint', icon: Upload }
  ];

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-12 overflow-x-auto pb-4 gap-4 no-scrollbar">
        {steps.map((s) => (
          <div key={s.id} className="flex flex-col items-center min-w-[80px]">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-2 transition-all ${step >= s.id ? 'bg-pro-emerald text-white shadow-lg shadow-pro-emerald/20' : 'bg-slate-100 text-slate-400'}`}>
              <s.icon className="w-6 h-6" />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${step >= s.id ? 'text-pro-emerald' : 'text-slate-400'}`}>{s.title}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Basic House Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">House Type</label>
                <select 
                  value={formData.houseType}
                  onChange={(e) => updateField('houseType', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                >
                  <option>Apartment</option>
                  <option>Independent house</option>
                  <option>Villa</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Total Area (sq ft)</label>
                <input 
                  type="number"
                  value={formData.area}
                  onChange={(e) => updateField('area', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                  placeholder="e.g. 1500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Number of Floors</label>
                <input 
                  type="number"
                  value={formData.floors}
                  onChange={(e) => updateField('floors', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Number of Bathrooms</label>
                <input 
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) => updateField('bathrooms', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Number of Kitchens</label>
                <input 
                  type="number"
                  value={formData.kitchens}
                  onChange={(e) => updateField('kitchens', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Water Source</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Primary Water Source</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Municipal water supply', 'Borewell', 'Water tanker', 'Combination'].map((source) => (
                    <button
                      key={source}
                      onClick={() => updateField('waterSource', source)}
                      className={`p-4 rounded-2xl border-2 transition-all text-sm font-bold ${formData.waterSource === source ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {source}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Droplets className="w-5 h-5 text-pro-emerald" />
                  </div>
                  <div>
                    <p className="font-bold text-pro-navy">Underground Tank</p>
                    <p className="text-xs text-slate-400">Need underground storage?</p>
                  </div>
                </div>
                <button 
                  onClick={() => updateField('undergroundTank', !formData.undergroundTank)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.undergroundTank ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.undergroundTank ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Droplets className="w-5 h-5 text-pro-emerald" />
                  </div>
                  <div>
                    <p className="font-bold text-pro-navy">Overhead Tank</p>
                    <p className="text-xs text-slate-400">Need rooftop storage?</p>
                  </div>
                </div>
                <button 
                  onClick={() => updateField('overheadTank', !formData.overheadTank)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.overheadTank ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.overheadTank ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Bathroom Plumbing Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Wash Basins</label>
                <input 
                  type="number"
                  value={formData.washBasins}
                  onChange={(e) => updateField('washBasins', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Toilets</label>
                <input 
                  type="number"
                  value={formData.toilets}
                  onChange={(e) => updateField('toilets', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Showers</label>
                <input 
                  type="number"
                  value={formData.showers}
                  onChange={(e) => updateField('showers', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl md:col-span-1.5">
                <div className="flex items-center gap-4">
                  <Flame className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Geyser Connection</p>
                </div>
                <button 
                  onClick={() => updateField('geyserConnection', !formData.geyserConnection)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.geyserConnection ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.geyserConnection ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl md:col-span-1.5">
                <div className="flex items-center gap-4">
                  <Bath className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Bathtub</p>
                </div>
                <button 
                  onClick={() => updateField('bathtub', !formData.bathtub)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.bathtub ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.bathtub ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Kitchen Plumbing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Kitchen Sinks</label>
                <input 
                  type="number"
                  value={formData.kitchenSinks}
                  onChange={(e) => updateField('kitchenSinks', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <Utensils className="w-5 h-5 text-pro-emerald" />
                    <p className="font-bold text-pro-navy">Dishwasher Connection</p>
                  </div>
                  <button 
                    onClick={() => updateField('dishwasher', !formData.dishwasher)}
                    className={`w-14 h-8 rounded-full transition-all relative ${formData.dishwasher ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.dishwasher ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <Droplets className="w-5 h-5 text-pro-emerald" />
                    <p className="font-bold text-pro-navy">Water Purifier Connection</p>
                  </div>
                  <button 
                    onClick={() => updateField('waterPurifier', !formData.waterPurifier)}
                    className={`w-14 h-8 rounded-full transition-all relative ${formData.waterPurifier ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.waterPurifier ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Drainage System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Drainage Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Sewage line connection', 'Septic tank system'].map((sys) => (
                    <button
                      key={sys}
                      onClick={() => updateField('drainageSystem', sys)}
                      className={`p-6 rounded-2xl border-2 transition-all text-sm font-bold flex items-center gap-4 ${formData.drainageSystem === sys ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      <Trash2 className="w-5 h-5" />
                      {sys}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <CloudRain className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Rainwater Drainage</p>
                </div>
                <button 
                  onClick={() => updateField('rainwaterDrainage', !formData.rainwaterDrainage)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.rainwaterDrainage ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.rainwaterDrainage ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Droplets className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Rainwater Harvesting</p>
                </div>
                <button 
                  onClick={() => updateField('rainwaterHarvesting', !formData.rainwaterHarvesting)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.rainwaterHarvesting ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.rainwaterHarvesting ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Outdoor Plumbing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'gardenTaps', label: 'Garden water taps', icon: Trees },
                { id: 'carWashTap', label: 'Car wash water tap', icon: Car },
                { id: 'terraceOutlet', label: 'Terrace water outlet', icon: Warehouse },
                { id: 'swimmingPool', label: 'Swimming pool plumbing', icon: Waves }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => updateField(item.id, !formData[item.id as keyof typeof formData])}
                  className={`p-6 rounded-2xl border-2 transition-all flex items-center gap-6 ${formData[item.id as keyof typeof formData] ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${formData[item.id as keyof typeof formData] ? 'bg-pro-emerald text-white' : 'bg-slate-50 text-slate-400'}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Pipe Material Preference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['PVC pipes', 'CPVC pipes', 'PPR pipes', 'Not sure (recommend)'].map((mat) => (
                <button
                  key={mat}
                  onClick={() => updateField('pipeMaterial', mat)}
                  className={`p-6 rounded-2xl border-2 transition-all text-left font-bold ${formData.pipeMaterial === mat ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Additional Plumbing Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'solarHeater', label: 'Solar water heater connection', icon: Sun },
                { id: 'pressurePump', label: 'Water pressure pump', icon: Activity },
                { id: 'greywaterRecycling', label: 'Greywater recycling system', icon: Droplets },
                { id: 'smartMonitoring', label: 'Smart water monitoring', icon: Smartphone }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => updateField(item.id, !formData[item.id as keyof typeof formData])}
                  className={`p-6 rounded-2xl border-2 transition-all flex items-center gap-6 ${formData[item.id as keyof typeof formData] ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${formData[item.id as keyof typeof formData] ? 'bg-pro-emerald text-white' : 'bg-slate-50 text-slate-400'}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 9 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Budget Preference</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { id: 'Basic plumbing setup', desc: 'Functional setup with standard materials.' },
                { id: 'Standard plumbing setup', desc: 'High-quality materials with better durability.' },
                { id: 'Premium plumbing setup', desc: 'Top-tier materials, smart features, and luxury fittings.' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => updateField('budgetCategory', b.id)}
                  className={`p-8 rounded-3xl border-2 transition-all text-left group ${formData.budgetCategory === b.id ? 'border-pro-emerald bg-pro-emerald/5' : 'border-slate-100'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-bold text-lg ${formData.budgetCategory === b.id ? 'text-pro-emerald' : 'text-pro-navy'}`}>{b.id}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.budgetCategory === b.id ? 'border-pro-emerald bg-pro-emerald' : 'border-slate-200'}`}>
                      {formData.budgetCategory === b.id && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">{b.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 10 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 text-center py-12">
            <div className="w-24 h-24 bg-pro-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-10 h-10 text-pro-emerald" />
            </div>
            <h2 className="text-2xl font-bold text-pro-navy">Upload Blueprint (Optional)</h2>
            <p className="text-slate-500 max-w-md mx-auto mb-8">Upload your house floor plan to help our plumbing engineers design the most efficient layout for you.</p>
            <div className="max-w-md mx-auto">
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer hover:border-pro-emerald hover:bg-slate-50 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-slate-400 mb-4" />
                  <p className="mb-2 text-sm text-slate-500 font-bold">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">PNG, JPG or PDF (MAX. 10MB)</p>
                </div>
                <input type="file" className="hidden" onChange={(e) => updateField('blueprint', e.target.files?.[0])} />
              </label>
              {formData.blueprint && (
                <div className="mt-4 p-4 bg-pro-emerald/5 rounded-2xl flex items-center justify-between border border-pro-emerald/10">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-pro-emerald" />
                    <span className="text-sm font-bold text-pro-emerald truncate max-w-[200px]">{formData.blueprint.name}</span>
                  </div>
                  <button onClick={() => updateField('blueprint', null)} className="text-pro-emerald hover:text-red-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-12 flex gap-4">
          {step > 1 ? (
            <button 
              onClick={() => setStep(step - 1)}
              className="px-8 py-4 rounded-2xl font-bold text-sm bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"
            >
              BACK
            </button>
          ) : (
            <button 
              onClick={onBack}
              className="px-8 py-4 rounded-2xl font-bold text-sm bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"
            >
              CANCEL
            </button>
          )}
          
          {step < 10 ? (
            <button 
              onClick={() => setStep(step + 1)}
              className="bg-pro-navy text-white flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-pro-navy/90 transition-all"
            >
              NEXT STEP
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              disabled={loading}
              className="bg-pro-emerald text-white flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-pro-emerald/90 transition-all shadow-lg shadow-pro-emerald/20 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Wrench className="w-5 h-5" />
                  SUBMIT PLUMBING REQUIREMENTS
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const FullHomeProjectForm = ({ user, onBack }: { user: User, onBack: () => void }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Step 1: Basic
    plotLength: '',
    plotWidth: '',
    plotFacing: 'North',
    floorsPlanned: '1',
    projectType: 'New house',
    // Step 2: Architectural
    bedrooms: '3',
    bathrooms: '3',
    kitchens: '1',
    livingRooms: '1',
    diningArea: true,
    parking: true,
    houseStyle: 'Modern',
    specialFeatures: [] as string[],
    vastuPreference: true,
    // Step 3: Civil
    soilType: 'Not sure',
    foundationType: 'Not sure',
    wallMaterial: 'Red bricks',
    slabType: 'RCC slab',
    basementRequired: false,
    additionalCivilWorks: [] as string[],
    // Step 4: Electrical
    lightPoints: '20',
    fanPoints: '10',
    powerSockets: '15',
    heavyAppliances: [] as string[],
    wiringType: 'Concealed',
    smartHomeFeatures: [] as string[],
    // Step 5: Plumbing
    waterSource: 'Municipal',
    undergroundTank: true,
    overheadTank: true,
    drainageSystem: 'Sewage line',
    plumbingFeatures: [] as string[],
    // Step 6: Budget & Timeline
    budgetRange: 'Standard',
    startDate: '',
    completionTimeline: '',
    // Step 7: Documents
    documents: null as File | null
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: 'specialFeatures' | 'additionalCivilWorks' | 'heavyAppliances' | 'smartHomeFeatures' | 'plumbingFeatures', item: string) => {
    setFormData(prev => {
      const arr = prev[field] as string[];
      const newArr = arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item];
      return { ...prev, [field]: newArr };
    });
  };

  const calculateArea = () => {
    const l = parseFloat(formData.plotLength) || 0;
    const w = parseFloat(formData.plotWidth) || 0;
    return (l * w).toFixed(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let estimatedBudget = 2500000;
      if (formData.budgetRange === 'Basic') estimatedBudget = 1500000;
      if (formData.budgetRange === 'Premium') estimatedBudget = 6000000;

      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.id,
          plot_area: parseFloat(calculateArea()),
          floors: parseInt(formData.floorsPlanned),
          rooms_per_floor: Math.ceil(parseInt(formData.bedrooms) / parseInt(formData.floorsPlanned)),
          budget: estimatedBudget,
          location: 'To be specified',
          style: formData.houseStyle,
          material_quality: formData.budgetRange as any,
          work_type: 'full_home',
          requirements_json: JSON.stringify({
            ...formData,
            calculatedArea: calculateArea()
          })
        })
      });

      const project = await res.json();
      navigate(`/project/${project.id}`);
    } catch (err) {
      console.error(err);
      alert("Error creating full home project.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, title: 'Basic', icon: Layout },
    { id: 2, title: 'Architectural', icon: FileText },
    { id: 3, title: 'Civil', icon: HardHat },
    { id: 4, title: 'Electrical', icon: Zap },
    { id: 5, title: 'Plumbing', icon: Droplets },
    { id: 6, title: 'Budget', icon: IndianRupee },
    { id: 7, title: 'Docs', icon: Upload }
  ];

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-12 overflow-x-auto pb-4 gap-4 no-scrollbar">
        {steps.map((s) => (
          <div key={s.id} className="flex flex-col items-center min-w-[80px]">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-2 transition-all ${step >= s.id ? 'bg-pro-emerald text-white shadow-lg shadow-pro-emerald/20' : 'bg-slate-100 text-slate-400'}`}>
              <s.icon className="w-6 h-6" />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${step >= s.id ? 'text-pro-emerald' : 'text-slate-400'}`}>{s.title}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Basic Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Plot Length (ft)</label>
                <input 
                  type="number"
                  value={formData.plotLength}
                  onChange={(e) => updateField('plotLength', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                  placeholder="e.g. 50"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Plot Width (ft)</label>
                <input 
                  type="number"
                  value={formData.plotWidth}
                  onChange={(e) => updateField('plotWidth', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                  placeholder="e.g. 30"
                />
              </div>
              <div className="bg-pro-emerald/5 p-6 rounded-2xl border border-pro-emerald/10 md:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-pro-emerald uppercase tracking-widest mb-1">Calculated Plot Area</p>
                    <p className="text-3xl font-display font-bold text-pro-navy">{calculateArea()} SQ FT</p>
                  </div>
                  <Ruler className="w-10 h-10 text-pro-emerald opacity-20" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Plot Facing</label>
                <div className="grid grid-cols-2 gap-3">
                  {['North', 'South', 'East', 'West'].map(dir => (
                    <button
                      key={dir}
                      onClick={() => updateField('plotFacing', dir)}
                      className={`py-3 rounded-xl border-2 transition-all font-bold text-xs ${formData.plotFacing === dir ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {dir}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Floors Planned</label>
                <input 
                  type="number"
                  value={formData.floorsPlanned}
                  onChange={(e) => updateField('floorsPlanned', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Project Type</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['New house', 'Renovation', 'Extension'].map((type) => (
                    <button
                      key={type}
                      onClick={() => updateField('projectType', type)}
                      className={`p-4 rounded-2xl border-2 transition-all text-sm font-bold ${formData.projectType === type ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Architectural Requirements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Bedrooms</label>
                <input type="number" value={formData.bedrooms} onChange={(e) => updateField('bedrooms', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Bathrooms</label>
                <input type="number" value={formData.bathrooms} onChange={(e) => updateField('bathrooms', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Kitchens</label>
                <input type="number" value={formData.kitchens} onChange={(e) => updateField('kitchens', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Living Rooms</label>
                <input type="number" value={formData.livingRooms} onChange={(e) => updateField('livingRooms', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Utensils className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Dining Area</p>
                </div>
                <button onClick={() => updateField('diningArea', !formData.diningArea)} className={`w-14 h-8 rounded-full transition-all relative ${formData.diningArea ? 'bg-pro-emerald' : 'bg-slate-200'}`}>
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.diningArea ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Car className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Parking / Garage</p>
                </div>
                <button onClick={() => updateField('parking', !formData.parking)} className={`w-14 h-8 rounded-full transition-all relative ${formData.parking ? 'bg-pro-emerald' : 'bg-slate-200'}`}>
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.parking ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Architectural Style</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {['Modern', 'Contemporary', 'Traditional', 'Minimalist', 'Luxury villa'].map(s => (
                  <button key={s} onClick={() => updateField('houseStyle', s)} className={`py-3 rounded-xl border-2 transition-all font-bold text-xs ${formData.houseStyle === s ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Special Features</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Balcony', 'Terrace garden', 'Study room', 'Home office', 'Pooja room', 'Basement', 'Lift provision'].map(f => (
                  <button key={f} onClick={() => toggleArrayItem('specialFeatures', f)} className={`py-3 rounded-xl border-2 transition-all font-bold text-xs ${formData.specialFeatures.includes(f) ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <Compass className="w-5 h-5 text-pro-emerald" />
                <p className="font-bold text-pro-navy">Follow Vastu Principles</p>
              </div>
              <button onClick={() => updateField('vastuPreference', !formData.vastuPreference)} className={`w-14 h-8 rounded-full transition-all relative ${formData.vastuPreference ? 'bg-pro-emerald' : 'bg-slate-200'}`}>
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.vastuPreference ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Civil Construction Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Soil Type</label>
                <select value={formData.soilType} onChange={(e) => updateField('soilType', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium">
                  <option>Clay</option>
                  <option>Sandy</option>
                  <option>Rocky</option>
                  <option>Not sure</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Foundation Type</label>
                <select value={formData.foundationType} onChange={(e) => updateField('foundationType', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium">
                  <option>Strip</option>
                  <option>Raft</option>
                  <option>Pile</option>
                  <option>Not sure</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Wall Material</label>
                <select value={formData.wallMaterial} onChange={(e) => updateField('wallMaterial', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium">
                  <option>Red bricks</option>
                  <option>Fly ash bricks</option>
                  <option>AAC blocks</option>
                  <option>Concrete blocks</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Slab Type</label>
                <select value={formData.slabType} onChange={(e) => updateField('slabType', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium">
                  <option>RCC slab</option>
                  <option>Precast slab</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <ArrowUpCircle className="w-5 h-5 text-pro-emerald rotate-180" />
                <p className="font-bold text-pro-navy">Basement Required</p>
              </div>
              <button onClick={() => updateField('basementRequired', !formData.basementRequired)} className={`w-14 h-8 rounded-full transition-all relative ${formData.basementRequired ? 'bg-pro-emerald' : 'bg-slate-200'}`}>
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.basementRequired ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Additional Civil Works</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Boundary wall', 'Staircase', 'Terrace waterproofing', 'Plastering', 'Flooring base preparation'].map(w => (
                  <button key={w} onClick={() => toggleArrayItem('additionalCivilWorks', w)} className={`py-3 rounded-xl border-2 transition-all font-bold text-xs ${formData.additionalCivilWorks.includes(w) ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}>
                    {w}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Electrical Work Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Light Points</label>
                <input type="number" value={formData.lightPoints} onChange={(e) => updateField('lightPoints', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Fan Points</label>
                <input type="number" value={formData.fanPoints} onChange={(e) => updateField('fanPoints', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Power Sockets</label>
                <input type="number" value={formData.powerSockets} onChange={(e) => updateField('powerSockets', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Heavy Appliances</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['AC', 'Geyser', 'Washing Machine', 'EV Charger', 'Microwave', 'Refrigerator'].map(a => (
                  <button key={a} onClick={() => toggleArrayItem('heavyAppliances', a)} className={`py-3 rounded-xl border-2 transition-all font-bold text-xs ${formData.heavyAppliances.includes(a) ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}>
                    {a}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Wiring Type</label>
              <div className="grid grid-cols-2 gap-4">
                {['Concealed', 'Surface'].map(w => (
                  <button key={w} onClick={() => updateField('wiringType', w)} className={`p-4 rounded-2xl border-2 transition-all text-sm font-bold ${formData.wiringType === w ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}>
                    {w}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Smart Home Features (Optional)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Smart Lighting', 'Smart Security', 'Automated Curtains', 'Voice Control'].map(s => (
                  <button key={s} onClick={() => toggleArrayItem('smartHomeFeatures', s)} className={`py-3 rounded-xl border-2 transition-all font-bold text-xs ${formData.smartHomeFeatures.includes(s) ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Plumbing Work Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Water Source</label>
                <select value={formData.waterSource} onChange={(e) => updateField('waterSource', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium">
                  <option>Municipal</option>
                  <option>Borewell</option>
                  <option>Tanker</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Drainage System</label>
                <select value={formData.drainageSystem} onChange={(e) => updateField('drainageSystem', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium">
                  <option>Sewage line</option>
                  <option>Septic tank</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Droplets className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Underground Water Tank</p>
                </div>
                <button onClick={() => updateField('undergroundTank', !formData.undergroundTank)} className={`w-14 h-8 rounded-full transition-all relative ${formData.undergroundTank ? 'bg-pro-emerald' : 'bg-slate-200'}`}>
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.undergroundTank ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Droplets className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Overhead Water Tank</p>
                </div>
                <button onClick={() => updateField('overheadTank', !formData.overheadTank)} className={`w-14 h-8 rounded-full transition-all relative ${formData.overheadTank ? 'bg-pro-emerald' : 'bg-slate-200'}`}>
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.overheadTank ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Optional Plumbing Features</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Solar water heater', 'Water pressure pump', 'Rainwater harvesting', 'Garden water taps'].map(f => (
                  <button key={f} onClick={() => toggleArrayItem('plumbingFeatures', f)} className={`py-3 rounded-xl border-2 transition-all font-bold text-xs ${formData.plumbingFeatures.includes(f) ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Budget and Timeline</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Budget Range</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Basic', 'Standard', 'Premium'].map(b => (
                    <button key={b} onClick={() => updateField('budgetRange', b)} className={`p-6 rounded-2xl border-2 transition-all text-left ${formData.budgetRange === b ? 'border-pro-emerald bg-pro-emerald/5' : 'border-slate-100'}`}>
                      <p className={`font-bold ${formData.budgetRange === b ? 'text-pro-emerald' : 'text-pro-navy'}`}>{b}</p>
                      <p className="text-xs text-slate-500 mt-1">{b === 'Basic' ? 'Essential construction' : b === 'Standard' ? 'Quality materials' : 'Luxury finishes'}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Expected Start Date</label>
                  <input type="date" value={formData.startDate} onChange={(e) => updateField('startDate', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Expected Completion Timeline</label>
                  <select value={formData.completionTimeline} onChange={(e) => updateField('completionTimeline', e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium">
                    <option value="">Select timeline</option>
                    <option>6 Months</option>
                    <option>12 Months</option>
                    <option>18 Months</option>
                    <option>24 Months</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 text-center py-12">
            <div className="w-24 h-24 bg-pro-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-10 h-10 text-pro-emerald" />
            </div>
            <h2 className="text-2xl font-bold text-pro-navy">Upload Documents (Optional)</h2>
            <p className="text-slate-500 max-w-md mx-auto mb-8">Upload plot documents, land maps, existing blueprints, or soil test reports.</p>
            <div className="max-w-md mx-auto">
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer hover:border-pro-emerald hover:bg-slate-50 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-slate-400 mb-4" />
                  <p className="mb-2 text-sm text-slate-500 font-bold">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">PDF, PNG or JPG (MAX. 20MB)</p>
                </div>
                <input type="file" className="hidden" onChange={(e) => updateField('documents', e.target.files?.[0])} />
              </label>
              {formData.documents && (
                <div className="mt-4 p-4 bg-pro-emerald/5 rounded-2xl flex items-center justify-between border border-pro-emerald/10">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-pro-emerald" />
                    <span className="text-sm font-bold text-pro-emerald truncate max-w-[200px]">{formData.documents.name}</span>
                  </div>
                  <button onClick={() => updateField('documents', null)} className="text-pro-emerald hover:text-red-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-12 flex gap-4">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)} className="px-8 py-4 rounded-2xl font-bold text-sm bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all">BACK</button>
          ) : (
            <button onClick={onBack} className="px-8 py-4 rounded-2xl font-bold text-sm bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all">CANCEL</button>
          )}
          
          {step < 7 ? (
            <button onClick={() => setStep(step + 1)} className="bg-pro-navy text-white flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-pro-navy/90 transition-all">
              NEXT STEP
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button onClick={handleSubmit} disabled={loading} className="bg-pro-emerald text-white flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-pro-emerald/90 transition-all shadow-lg shadow-pro-emerald/20 disabled:opacity-50">
              {loading ? (
                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  SUBMIT FULL HOME PROJECT
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const CivilProjectForm = ({ user, onBack }: { user: User, onBack: () => void }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Section 1: Project Overview
    projectType: 'New house construction',
    plotArea: '',
    floorsPlanned: '1',
    basementRequired: false,
    // Section 2: Foundation
    soilType: 'Not sure',
    foundationType: 'Not sure – engineer will decide',
    // Section 3: Materials
    wallMaterial: 'Red bricks',
    cementBrand: '',
    steelQuality: '',
    // Section 4: Structural Elements
    columnsRequired: true,
    beamsRequired: true,
    slabType: 'RCC slab',
    // Section 5: Additional Work
    additionalWork: [] as string[],
    // Section 6: Site Prep
    landClearing: false,
    excavation: false,
    demolition: false,
    // Section 7: Timeline
    startDate: '',
    completionTime: '',
    // Section 8: Budget
    budgetCategory: 'Standard construction',
    // Section 9: Documents
    documents: null as File | null
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleAdditionalWork = (work: string) => {
    setFormData(prev => {
      const works = prev.additionalWork.includes(work)
        ? prev.additionalWork.filter(w => w !== work)
        : [...prev.additionalWork, work];
      return { ...prev, additionalWork: works };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let estimatedBudget = 1500000;
      if (formData.budgetCategory === 'Basic construction') estimatedBudget = 800000;
      if (formData.budgetCategory === 'Premium construction') estimatedBudget = 3500000;

      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.id,
          plot_area: Number(formData.plotArea),
          floors: Number(formData.floorsPlanned),
          rooms_per_floor: 3, // Default
          budget: estimatedBudget,
          location: 'To be specified',
          style: formData.projectType,
          material_quality: formData.budgetCategory.split(' ')[0] as any,
          work_type: 'civil',
          requirements_json: JSON.stringify(formData)
        })
      });

      const project = await res.json();
      navigate(`/project/${project.id}`);
    } catch (err) {
      console.error(err);
      alert("Error creating civil project.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, title: 'Overview', icon: Layout },
    { id: 2, title: 'Foundation', icon: Mountain },
    { id: 3, title: 'Materials', icon: Box },
    { id: 4, title: 'Structure', icon: Layers },
    { id: 5, title: 'Services', icon: Hammer },
    { id: 6, title: 'Site Prep', icon: Truck },
    { id: 7, title: 'Timeline', icon: Timer },
    { id: 8, title: 'Budget', icon: IndianRupee },
    { id: 9, title: 'Documents', icon: Upload }
  ];

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-12 overflow-x-auto pb-4 gap-4 no-scrollbar">
        {steps.map((s) => (
          <div key={s.id} className="flex flex-col items-center min-w-[80px]">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-2 transition-all ${step >= s.id ? 'bg-pro-emerald text-white shadow-lg shadow-pro-emerald/20' : 'bg-slate-100 text-slate-400'}`}>
              <s.icon className="w-6 h-6" />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${step >= s.id ? 'text-pro-emerald' : 'text-slate-400'}`}>{s.title}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Project Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Project Type</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['New house construction', 'House renovation', 'House extension'].map((type) => (
                    <button
                      key={type}
                      onClick={() => updateField('projectType', type)}
                      className={`p-4 rounded-2xl border-2 transition-all text-sm font-bold ${formData.projectType === type ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Total Plot Area (sq ft)</label>
                <input 
                  type="number"
                  value={formData.plotArea}
                  onChange={(e) => updateField('plotArea', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                  placeholder="e.g. 1200"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Number of Floors</label>
                <input 
                  type="number"
                  value={formData.floorsPlanned}
                  onChange={(e) => updateField('floorsPlanned', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl md:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <ArrowUpCircle className="w-5 h-5 text-pro-emerald rotate-180" />
                  </div>
                  <div>
                    <p className="font-bold text-pro-navy">Basement Required</p>
                    <p className="text-xs text-slate-400">Do you need a basement level?</p>
                  </div>
                </div>
                <button 
                  onClick={() => updateField('basementRequired', !formData.basementRequired)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.basementRequired ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.basementRequired ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Foundation Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Soil Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Clay', 'Sandy', 'Rocky', 'Not sure'].map(soil => (
                    <button
                      key={soil}
                      onClick={() => updateField('soilType', soil)}
                      className={`py-3 rounded-xl border-2 transition-all font-bold text-xs ${formData.soilType === soil ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {soil}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Foundation Preference</label>
                <select 
                  value={formData.foundationType}
                  onChange={(e) => updateField('foundationType', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                >
                  <option>Strip foundation</option>
                  <option>Raft foundation</option>
                  <option>Pile foundation</option>
                  <option>Not sure – engineer will decide</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Structural Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Wall Material</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Red bricks', 'Concrete blocks', 'Fly ash bricks', 'AAC blocks'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => updateField('wallMaterial', mat)}
                      className={`p-4 rounded-2xl border-2 transition-all text-sm font-bold ${formData.wallMaterial === mat ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cement Brand Preference (Optional)</label>
                <input 
                  type="text"
                  value={formData.cementBrand}
                  onChange={(e) => updateField('cementBrand', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                  placeholder="e.g. UltraTech, ACC"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Steel Quality Preference (Optional)</label>
                <input 
                  type="text"
                  value={formData.steelQuality}
                  onChange={(e) => updateField('steelQuality', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                  placeholder="e.g. TATA Tiscon, JSW"
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Structural Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Layers className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Columns Required</p>
                </div>
                <button 
                  onClick={() => updateField('columnsRequired', !formData.columnsRequired)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.columnsRequired ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.columnsRequired ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Layers className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Beams Required</p>
                </div>
                <button 
                  onClick={() => updateField('beamsRequired', !formData.beamsRequired)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.beamsRequired ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.beamsRequired ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Slab Type</label>
                <div className="grid grid-cols-2 gap-4">
                  {['RCC slab', 'Precast slab'].map((slab) => (
                    <button
                      key={slab}
                      onClick={() => updateField('slabType', slab)}
                      className={`p-4 rounded-2xl border-2 transition-all text-sm font-bold ${formData.slabType === slab ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {slab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Additional Construction Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Boundary wall construction',
                'Staircase construction',
                'Terrace waterproofing',
                'Plastering work',
                'Flooring base preparation'
              ].map((work) => (
                <button
                  key={work}
                  onClick={() => toggleAdditionalWork(work)}
                  className={`p-6 rounded-2xl border-2 transition-all flex items-center gap-4 text-left ${formData.additionalWork.includes(work) ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${formData.additionalWork.includes(work) ? 'bg-pro-emerald text-white' : 'bg-slate-50 text-slate-400'}`}>
                    <Plus className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm">{work}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Site Preparation</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { id: 'landClearing', label: 'Land clearing required', icon: Trees },
                { id: 'excavation', label: 'Excavation required', icon: Shovel },
                { id: 'demolition', label: 'Demolition of old structure required', icon: Trash2 }
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <item.icon className="w-5 h-5 text-pro-emerald" />
                    </div>
                    <p className="font-bold text-pro-navy">{item.label}</p>
                  </div>
                  <button 
                    onClick={() => updateField(item.id, !formData[item.id as keyof typeof formData])}
                    className={`w-14 h-8 rounded-full transition-all relative ${formData[item.id as keyof typeof formData] ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData[item.id as keyof typeof formData] ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Construction Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Construction Start Date</label>
                <input 
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => updateField('startDate', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Expected Completion Time</label>
                <select 
                  value={formData.completionTime}
                  onChange={(e) => updateField('completionTime', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                >
                  <option value="">Select duration</option>
                  <option>3 - 6 Months</option>
                  <option>6 - 12 Months</option>
                  <option>12 - 18 Months</option>
                  <option>18+ Months</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Budget Range</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { id: 'Basic construction', desc: 'Standard materials with essential structural integrity.' },
                { id: 'Standard construction', desc: 'Quality materials with better durability and finish.' },
                { id: 'Premium construction', desc: 'Top-tier materials, reinforced structure, and high-end finishes.' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => updateField('budgetCategory', b.id)}
                  className={`p-8 rounded-3xl border-2 transition-all text-left group ${formData.budgetCategory === b.id ? 'border-pro-emerald bg-pro-emerald/5' : 'border-slate-100'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-bold text-lg ${formData.budgetCategory === b.id ? 'text-pro-emerald' : 'text-pro-navy'}`}>{b.id}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.budgetCategory === b.id ? 'border-pro-emerald bg-pro-emerald' : 'border-slate-200'}`}>
                      {formData.budgetCategory === b.id && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">{b.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 9 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 text-center py-12">
            <div className="w-24 h-24 bg-pro-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-10 h-10 text-pro-emerald" />
            </div>
            <h2 className="text-2xl font-bold text-pro-navy">Upload Supporting Documents (Optional)</h2>
            <p className="text-slate-500 max-w-md mx-auto mb-8">Upload plot documents, architectural drawings, or soil test reports to help our engineers provide an accurate quote.</p>
            <div className="max-w-md mx-auto">
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer hover:border-pro-emerald hover:bg-slate-50 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-slate-400 mb-4" />
                  <p className="mb-2 text-sm text-slate-500 font-bold">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">PDF, PNG or JPG (MAX. 20MB)</p>
                </div>
                <input type="file" className="hidden" onChange={(e) => updateField('documents', e.target.files?.[0])} />
              </label>
              {formData.documents && (
                <div className="mt-4 p-4 bg-pro-emerald/5 rounded-2xl flex items-center justify-between border border-pro-emerald/10">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-pro-emerald" />
                    <span className="text-sm font-bold text-pro-emerald truncate max-w-[200px]">{formData.documents.name}</span>
                  </div>
                  <button onClick={() => updateField('documents', null)} className="text-pro-emerald hover:text-red-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-12 flex gap-4">
          {step > 1 ? (
            <button 
              onClick={() => setStep(step - 1)}
              className="px-8 py-4 rounded-2xl font-bold text-sm bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"
            >
              BACK
            </button>
          ) : (
            <button 
              onClick={onBack}
              className="px-8 py-4 rounded-2xl font-bold text-sm bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"
            >
              CANCEL
            </button>
          )}
          
          {step < 9 ? (
            <button 
              onClick={() => setStep(step + 1)}
              className="bg-pro-navy text-white flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-pro-navy/90 transition-all"
            >
              NEXT STEP
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              disabled={loading}
              className="bg-pro-emerald text-white flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-pro-emerald/90 transition-all shadow-lg shadow-pro-emerald/20 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <HardHat className="w-5 h-5" />
                  SUBMIT CIVIL REQUIREMENTS
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ArchitectProjectForm = ({ user, onBack }: { user: User, onBack: () => void }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Section 1: Plot Details
    plotLength: '',
    plotWidth: '',
    plotFacing: 'North',
    floorsPlanned: '1',
    // Section 2: House Layout
    bedrooms: '2',
    bathrooms: '2',
    kitchens: '1',
    livingRooms: '1',
    diningRoom: true,
    parking: true,
    // Section 3: Room Distribution
    floorWiseRooms: [
      { floor: 'Ground Floor', bedrooms: 1, bathrooms: 1, kitchen: 1, livingRoom: 1, balcony: 0 }
    ],
    // Section 4: House Style
    houseStyle: 'Modern',
    // Section 5: Special Features
    specialFeatures: [] as string[],
    // Section 6: Vastu
    vastuPreference: true,
    // Section 7: Budget
    budgetCategory: 'Medium budget house',
    // Section 8: Documents
    documents: null as File | null
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateArea = () => {
    const l = parseFloat(formData.plotLength) || 0;
    const w = parseFloat(formData.plotWidth) || 0;
    return (l * w).toFixed(2);
  };

  const addFloor = () => {
    const floorNames = ['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor', 'Fourth Floor'];
    const nextFloorIndex = formData.floorWiseRooms.length;
    if (nextFloorIndex >= floorNames.length) return;
    
    setFormData(prev => ({
      ...prev,
      floorWiseRooms: [
        ...prev.floorWiseRooms,
        { floor: floorNames[nextFloorIndex], bedrooms: 1, bathrooms: 1, kitchen: 0, livingRoom: 1, balcony: 1 }
      ]
    }));
  };

  const updateFloorRoom = (index: number, field: string, value: number) => {
    setFormData(prev => {
      const newFloors = [...prev.floorWiseRooms];
      newFloors[index] = { ...newFloors[index], [field]: value };
      return { ...prev, floorWiseRooms: newFloors };
    });
  };

  const toggleFeature = (feature: string) => {
    setFormData(prev => {
      const features = prev.specialFeatures.includes(feature)
        ? prev.specialFeatures.filter(f => f !== feature)
        : [...prev.specialFeatures, feature];
      return { ...prev, specialFeatures: features };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let estimatedBudget = 500000;
      if (formData.budgetCategory === 'Medium budget house') estimatedBudget = 1500000;
      if (formData.budgetCategory === 'Premium house') estimatedBudget = 5000000;

      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.id,
          plot_area: parseFloat(calculateArea()),
          floors: parseInt(formData.floorsPlanned),
          rooms_per_floor: parseInt(formData.bedrooms), // Using bedrooms as a proxy for rooms
          budget: estimatedBudget,
          location: 'To be specified',
          style: formData.houseStyle,
          material_quality: formData.budgetCategory.includes('Premium') ? 'Premium' : (formData.budgetCategory.includes('Medium') ? 'Standard' : 'Basic'),
          work_type: 'architectural',
          requirements_json: JSON.stringify({
            ...formData,
            calculatedArea: calculateArea()
          })
        })
      });

      const project = await res.json();
      navigate(`/project/${project.id}`);
    } catch (err) {
      console.error(err);
      alert("Error creating architectural project.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, title: 'Plot Details', icon: Ruler },
    { id: 2, title: 'Layout', icon: Home },
    { id: 3, title: 'Floors', icon: Layers },
    { id: 4, title: 'Style', icon: Building2 },
    { id: 5, title: 'Features', icon: Star },
    { id: 6, title: 'Vastu', icon: Compass },
    { id: 7, title: 'Budget', icon: IndianRupee },
    { id: 8, title: 'Documents', icon: Upload }
  ];

  const houseStyles = [
    { id: 'Modern', name: 'Modern', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80' },
    { id: 'Contemporary', name: 'Contemporary', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80' },
    { id: 'Traditional', name: 'Traditional', img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=300&q=80' },
    { id: 'Minimalist', name: 'Minimalist', img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=300&q=80' },
    { id: 'Luxury Villa', name: 'Luxury Villa', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=300&q=80' },
  ];

  const specialFeaturesOptions = [
    { id: 'Balcony', name: 'Balcony', icon: Warehouse },
    { id: 'Terrace garden', name: 'Terrace Garden', icon: Flower2 },
    { id: 'Study room', name: 'Study Room', icon: Library },
    { id: 'Home office', name: 'Home Office', icon: Briefcase },
    { id: 'Pooja room', name: 'Pooja Room', icon: Sparkles },
    { id: 'Walk-in closet', name: 'Walk-in Closet', icon: Box },
    { id: 'Basement', name: 'Basement', icon: ArrowUpCircle },
    { id: 'Lift provision', name: 'Lift Provision', icon: Layers },
  ];

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-12 overflow-x-auto pb-4 gap-4 no-scrollbar">
        {steps.map((s) => (
          <div key={s.id} className="flex flex-col items-center min-w-[80px]">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-2 transition-all ${step >= s.id ? 'bg-pro-emerald text-white shadow-lg shadow-pro-emerald/20' : 'bg-slate-100 text-slate-400'}`}>
              <s.icon className="w-6 h-6" />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${step >= s.id ? 'text-pro-emerald' : 'text-slate-400'}`}>{s.title}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Plot Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Plot Length (ft)</label>
                <input 
                  type="number"
                  value={formData.plotLength}
                  onChange={(e) => updateField('plotLength', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                  placeholder="e.g. 50"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Plot Width (ft)</label>
                <input 
                  type="number"
                  value={formData.plotWidth}
                  onChange={(e) => updateField('plotWidth', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                  placeholder="e.g. 30"
                />
              </div>
              <div className="bg-pro-emerald/5 p-6 rounded-2xl border border-pro-emerald/10 md:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-pro-emerald uppercase tracking-widest mb-1">Calculated Plot Area</p>
                    <p className="text-3xl font-display font-bold text-pro-navy">{calculateArea()} SQ FT</p>
                  </div>
                  <Ruler className="w-10 h-10 text-pro-emerald opacity-20" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Plot Facing</label>
                <div className="grid grid-cols-2 gap-3">
                  {['North', 'South', 'East', 'West'].map(dir => (
                    <button
                      key={dir}
                      onClick={() => updateField('plotFacing', dir)}
                      className={`py-3 rounded-xl border-2 transition-all font-bold text-xs ${formData.plotFacing === dir ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {dir}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Floors Planned</label>
                <input 
                  type="number"
                  value={formData.floorsPlanned}
                  onChange={(e) => updateField('floorsPlanned', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">House Layout Requirements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Bedrooms</label>
                <input 
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => updateField('bedrooms', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Bathrooms</label>
                <input 
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) => updateField('bathrooms', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Kitchens</label>
                <input 
                  type="number"
                  value={formData.kitchens}
                  onChange={(e) => updateField('kitchens', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Living Rooms</label>
                <input 
                  type="number"
                  value={formData.livingRooms}
                  onChange={(e) => updateField('livingRooms', e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-pro-emerald transition-all font-medium"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Utensils className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Dining Room</p>
                </div>
                <button 
                  onClick={() => updateField('diningRoom', !formData.diningRoom)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.diningRoom ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.diningRoom ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Car className="w-5 h-5 text-pro-emerald" />
                  <p className="font-bold text-pro-navy">Parking / Garage</p>
                </div>
                <button 
                  onClick={() => updateField('parking', !formData.parking)}
                  className={`w-14 h-8 rounded-full transition-all relative ${formData.parking ? 'bg-pro-emerald' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${formData.parking ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-pro-navy">Room Distribution Per Floor</h2>
              <button 
                onClick={addFloor}
                className="flex items-center gap-2 text-pro-emerald font-bold text-sm hover:underline"
              >
                <Plus className="w-4 h-4" />
                ADD FLOOR
              </button>
            </div>
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              {formData.floorWiseRooms.map((floor, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="font-bold text-pro-navy mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-pro-emerald text-white rounded-lg flex items-center justify-center text-xs">
                      {idx + 1}
                    </div>
                    {floor.floor}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Bedrooms</label>
                      <input 
                        type="number"
                        value={floor.bedrooms}
                        onChange={(e) => updateFloorRoom(idx, 'bedrooms', parseInt(e.target.value))}
                        className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-pro-emerald outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Bathrooms</label>
                      <input 
                        type="number"
                        value={floor.bathrooms}
                        onChange={(e) => updateFloorRoom(idx, 'bathrooms', parseInt(e.target.value))}
                        className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-pro-emerald outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Kitchen</label>
                      <input 
                        type="number"
                        value={floor.kitchen}
                        onChange={(e) => updateFloorRoom(idx, 'kitchen', parseInt(e.target.value))}
                        className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-pro-emerald outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Living</label>
                      <input 
                        type="number"
                        value={floor.livingRoom}
                        onChange={(e) => updateFloorRoom(idx, 'livingRoom', parseInt(e.target.value))}
                        className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-pro-emerald outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Balcony</label>
                      <input 
                        type="number"
                        value={floor.balcony}
                        onChange={(e) => updateFloorRoom(idx, 'balcony', parseInt(e.target.value))}
                        className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-pro-emerald outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">House Style Selection</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {houseStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => updateField('houseStyle', style.id)}
                  className={`group relative overflow-hidden rounded-3xl border-4 transition-all ${formData.houseStyle === style.id ? 'border-pro-emerald' : 'border-transparent'}`}
                >
                  <img 
                    src={style.img} 
                    alt={style.name} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 transition-opacity ${formData.houseStyle === style.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                    <p className="text-white font-bold text-lg">{style.name}</p>
                    {formData.houseStyle === style.id && (
                      <div className="absolute top-4 right-4 bg-pro-emerald text-white p-1 rounded-full">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Special Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {specialFeaturesOptions.map((feat) => (
                <button
                  key={feat.id}
                  onClick={() => toggleFeature(feat.id)}
                  className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 text-center ${formData.specialFeatures.includes(feat.id) ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${formData.specialFeatures.includes(feat.id) ? 'bg-pro-emerald text-white' : 'bg-slate-50 text-slate-400'}`}>
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider">{feat.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Vastu Preference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => updateField('vastuPreference', true)}
                className={`p-8 rounded-3xl border-2 transition-all flex items-center gap-6 ${formData.vastuPreference ? 'border-pro-emerald bg-pro-emerald/5' : 'border-slate-100'}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${formData.vastuPreference ? 'bg-pro-emerald text-white' : 'bg-slate-50 text-slate-400'}`}>
                  <Compass className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <p className={`font-bold text-xl ${formData.vastuPreference ? 'text-pro-emerald' : 'text-pro-navy'}`}>Follow Vastu</p>
                  <p className="text-sm text-slate-500">Design according to Vastu principles.</p>
                </div>
              </button>
              <button
                onClick={() => updateField('vastuPreference', false)}
                className={`p-8 rounded-3xl border-2 transition-all flex items-center gap-6 ${!formData.vastuPreference ? 'border-slate-400 bg-slate-50' : 'border-slate-100'}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${!formData.vastuPreference ? 'bg-slate-400 text-white' : 'bg-slate-50 text-slate-400'}`}>
                  <X className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <p className={`font-bold text-xl ${!formData.vastuPreference ? 'text-slate-600' : 'text-pro-navy'}`}>No Vastu</p>
                  <p className="text-sm text-slate-500">Focus on modern layout only.</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold text-pro-navy">Budget Range</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { id: 'Low budget house', desc: 'Cost-effective design with essential features.' },
                { id: 'Medium budget house', desc: 'Balanced design with quality materials and aesthetics.' },
                { id: 'Premium house', desc: 'High-end luxury design with premium features and finishes.' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => updateField('budgetCategory', b.id)}
                  className={`p-8 rounded-3xl border-2 transition-all text-left group ${formData.budgetCategory === b.id ? 'border-pro-emerald bg-pro-emerald/5' : 'border-slate-100'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-bold text-lg ${formData.budgetCategory === b.id ? 'text-pro-emerald' : 'text-pro-navy'}`}>{b.id}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.budgetCategory === b.id ? 'border-pro-emerald bg-pro-emerald' : 'border-slate-200'}`}>
                      {formData.budgetCategory === b.id && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">{b.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 text-center py-12">
            <div className="w-24 h-24 bg-pro-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-10 h-10 text-pro-emerald" />
            </div>
            <h2 className="text-2xl font-bold text-pro-navy">Upload Plot Documents (Optional)</h2>
            <p className="text-slate-500 max-w-md mx-auto mb-8">Upload plot layout files, land maps, or existing blueprints to help the architect design accurately.</p>
            <div className="max-w-md mx-auto">
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer hover:border-pro-emerald hover:bg-slate-50 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-slate-400 mb-4" />
                  <p className="mb-2 text-sm text-slate-500 font-bold">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">PDF, DWG or JPG (MAX. 20MB)</p>
                </div>
                <input type="file" className="hidden" onChange={(e) => updateField('documents', e.target.files?.[0])} />
              </label>
              {formData.documents && (
                <div className="mt-4 p-4 bg-pro-emerald/5 rounded-2xl flex items-center justify-between border border-pro-emerald/10">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-pro-emerald" />
                    <span className="text-sm font-bold text-pro-emerald truncate max-w-[200px]">{formData.documents.name}</span>
                  </div>
                  <button onClick={() => updateField('documents', null)} className="text-pro-emerald hover:text-red-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-12 flex gap-4">
          {step > 1 ? (
            <button 
              onClick={() => setStep(step - 1)}
              className="px-8 py-4 rounded-2xl font-bold text-sm bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"
            >
              BACK
            </button>
          ) : (
            <button 
              onClick={onBack}
              className="px-8 py-4 rounded-2xl font-bold text-sm bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"
            >
              CANCEL
            </button>
          )}
          
          {step < 8 ? (
            <button 
              onClick={() => setStep(step + 1)}
              className="bg-pro-navy text-white flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-pro-navy/90 transition-all"
            >
              NEXT STEP
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              disabled={loading}
              className="bg-pro-emerald text-white flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-pro-emerald/90 transition-all shadow-lg shadow-pro-emerald/20 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <FileText className="w-5 h-5" />
                  SUBMIT ARCHITECTURAL REQUIREMENTS
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const NewProjectForm = ({ user }: { user: User }) => {
  const [step, setStep] = useState(1);
  const [workType, setWorkType] = useState<string>('');
  const [plotArea, setPlotArea] = useState('');
  const [floors, setFloors] = useState('1');
  const [rooms, setRooms] = useState('3');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [style, setStyle] = useState('Modern');
  const [materialQuality, setMaterialQuality] = useState<'Basic' | 'Standard' | 'Premium'>('Standard');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const workTypes = [
    { id: 'full_home', title: 'Full Home Building', desc: 'Includes plumbing, electrical, structural, and architectural work.', icon: Building2 },
    { id: 'civil', title: 'Home Building (Civil)', desc: 'Focus on structural and civil engineering aspects.', icon: HardHat },
    { id: 'architectural', title: 'Architect / Map Building', desc: 'Architectural design and blueprint creation.', icon: FileText },
    { id: 'plumbing', title: 'Plumbing Work', desc: 'Specialized plumbing installation and maintenance.', icon: Droplets },
    { id: 'electrical', title: 'Electrical Work', desc: 'Electrical system design and installation.', icon: Zap }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          user_id: user.id, 
          plot_area: Number(plotArea), 
          floors: Number(floors), 
          rooms_per_floor: Number(rooms), 
          budget: Number(budget), 
          location, 
          style,
          material_quality: materialQuality,
          work_type: workType
        })
      });
      const project = await res.json();
      navigate(`/project/${project.id}`);
    } catch (err) {
      console.error(err);
      alert("Error creating project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-73px)] p-12 bg-slate-50 construction-grid">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="industrial-card p-12 max-w-4xl mx-auto border-none shadow-2xl shadow-slate-200"
      >
        <div className="flex items-center gap-6 mb-12">
          <div className="bg-pro-emerald/10 p-5 rounded-2xl border border-pro-emerald/20">
            {step === 1 ? <Layers className="w-8 h-8 text-pro-emerald" /> : <Plus className="w-8 h-8 text-pro-emerald" />}
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-pro-navy">
              {step === 1 ? 'Select Work Type' : 'Project Details'}
            </h1>
            <p className="text-slate-500 font-medium mt-1">
              {step === 1 ? 'What kind of construction work do you need?' : 'Define your construction requirements for accurate estimation'}
            </p>
          </div>
        </div>

        {step === 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setWorkType(type.id);
                  setStep(2);
                }}
                className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-slate-100 hover:border-pro-emerald hover:shadow-xl hover:shadow-slate-200 transition-all text-left group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-pro-emerald group-hover:text-white transition-all">
                  <type.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pro-navy mb-2">{type.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{type.desc}</p>
                </div>
              </button>
            ))}
          </div>
        ) : workType === 'full_home' ? (
          <FullHomeProjectForm user={user} onBack={() => setStep(1)} />
        ) : workType === 'electrical' ? (
          <ElectricalProjectForm user={user} onBack={() => setStep(1)} />
        ) : workType === 'plumbing' ? (
          <PlumbingProjectForm user={user} onBack={() => setStep(1)} />
        ) : workType === 'architectural' ? (
          <ArchitectProjectForm user={user} onBack={() => setStep(1)} />
        ) : workType === 'civil' ? (
          <CivilProjectForm user={user} onBack={() => setStep(1)} />
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Plot Area (SQ FT)</label>
                <input 
                  type="number" 
                  value={plotArea} 
                  onChange={(e) => setPlotArea(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                  placeholder="e.g. 1500"
                  required 
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Number of Floors</label>
                  <input 
                    type="number" 
                    value={floors} 
                    onChange={(e) => setFloors(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Rooms per Floor</label>
                  <input 
                    type="number" 
                    value={rooms} 
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                    required 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Budget Range (₹)</label>
                <input 
                  type="number" 
                  value={budget} 
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                  placeholder="e.g. 250000"
                  required 
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Site Location</label>
                <input 
                  type="text" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
                  placeholder="City, State"
                  required 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Material Quality</label>
                <div className="grid grid-cols-3 gap-4">
                  {(['Basic', 'Standard', 'Premium'] as const).map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setMaterialQuality(q)}
                      className={`py-3 rounded-xl border-2 transition-all font-bold text-xs ${materialQuality === q ? 'border-pro-emerald bg-pro-emerald/5 text-pro-emerald' : 'border-slate-100 text-slate-400'}`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Notice</p>
                <p className="text-sm text-slate-500 leading-relaxed">Submitting this form will calculate a detailed construction cost estimate and allow you to hire engineers for your project.</p>
              </div>
            </div>

            <div className="md:col-span-2 pt-6 flex gap-4">
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="px-8 py-5 rounded-2xl font-bold text-sm bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"
              >
                BACK
              </button>
              <button 
                type="submit"
                disabled={loading}
                className="bg-pro-emerald text-white flex-1 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 hover:bg-pro-emerald/90 transition-all shadow-xl shadow-pro-emerald/20 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    CALCULATING ESTIMATES...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-6 h-6" />
                    CREATE PROJECT & ESTIMATE COST
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

import { io, Socket } from 'socket.io-client';

const AdminDashboard = () => {
  const [engineers, setEngineers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/admin/engineers').then(res => res.json()).then(setEngineers);
  }, []);

  const verify = async (id: number) => {
    await fetch(`/api/admin/engineers/${id}/verify`, { method: 'PATCH' });
    setEngineers(prev => prev.map(e => e.id === id ? { ...e, is_verified: 1 } : e));
  };

  return (
    <div className="p-12 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-pro-navy mb-2">Network Administration</h1>
          <p className="text-slate-500 font-medium">Manage and verify professional engineering credentials</p>
        </div>
        <div className="bg-pro-emerald/10 text-pro-emerald px-4 py-2 rounded-lg font-bold text-sm border border-pro-emerald/20">
          {engineers.length} Registered Professionals
        </div>
      </div>
      
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Engineer Profile</th>
              <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Specialization</th>
              <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Verification Status</th>
              <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {engineers.map(eng => (
              <tr key={eng.id} className="hover:bg-slate-50/30 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
                      {eng.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-pro-navy">{eng.name}</div>
                      <div className="text-sm text-slate-400">{eng.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">{eng.specialization}</span>
                </td>
                <td className="px-8 py-6">
                  {eng.is_verified ? (
                    <div className="flex items-center gap-2 text-pro-emerald">
                      <div className="w-2 h-2 bg-pro-emerald rounded-full" />
                      <span className="text-sm font-bold">Verified Professional</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-amber-500">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                      <span className="text-sm font-bold">Pending Review</span>
                    </div>
                  )}
                </td>
                <td className="px-8 py-6 text-right">
                  {!eng.is_verified && (
                    <button 
                      onClick={() => verify(eng.id)}
                      className="bg-pro-emerald text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-pro-emerald/90 transition-all shadow-lg shadow-pro-emerald/20"
                    >
                      Verify Credentials
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const EngineerMarketplace = ({ user }: { user: User }) => {
  const [engineers, setEngineers] = useState<User[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch(`/api/engineers${filter ? `?specialization=${filter}` : ''}`)
      .then(res => res.json())
      .then(setEngineers);
  }, [filter]);

  return (
    <div className="p-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-16">
        <h1 className="text-6xl font-display font-bold text-pro-navy leading-none mb-6">Verified <span className="text-slate-300">Engineers</span></h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">Connect with certified professionals for your construction project. All engineers are vetted for license validity and experience.</p>
      </div>

      <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
        {['', 'Structural', 'Civil', 'Electrical', 'Plumbing', 'Architectural'].map(spec => (
          <button
            key={spec}
            onClick={() => setFilter(spec)}
            className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === spec ? 'bg-pro-navy text-white shadow-lg shadow-pro-navy/20' : 'bg-white text-slate-500 border border-slate-100 hover:border-pro-emerald hover:text-pro-emerald'}`}
          >
            {spec || 'All Specializations'}
          </button>
        ))}
      </div>

      {engineers.length === 0 ? (
        <div className="bg-white p-20 rounded-3xl border border-slate-100 text-center shadow-2xl shadow-slate-200">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-slate-300" />
          </div>
          <h3 className="text-2xl font-display font-bold text-pro-navy">No Verified Engineers Found</h3>
          <p className="text-slate-500 mt-2 font-medium">Try adjusting your filters or check back later as we verify more professionals.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {engineers.map(eng => (
            <motion.div 
              key={eng.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200 border border-slate-100 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-pro-navy group-hover:text-white transition-all">
                  <UserIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-pro-navy">{eng.name}</h3>
                  <div className="flex items-center gap-2 text-pro-emerald text-[10px] font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-3 h-3" /> Verified Expert
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Specialization</span>
                  <span className="text-xs font-bold text-pro-navy uppercase tracking-widest">{eng.specialization}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Experience</span>
                  <span className="text-xs font-bold text-pro-navy uppercase tracking-widest">{eng.experience_years} Years</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rating</span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs font-bold">{eng.rating}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-500 text-sm font-medium line-clamp-3 mb-8 leading-relaxed">{eng.bio}</p>

              <button className="w-full bg-slate-50 text-pro-navy py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-pro-navy hover:text-white transition-all border border-slate-100 group-hover:border-pro-navy">
                View Profile & Hire
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

const EngineerDashboard = ({ user }: { user: User }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/projects?role=engineer')
      .then(res => res.json())
      .then(setProjects);
  }, []);

  return (
    <div className="p-12 max-w-7xl mx-auto construction-grid min-h-screen">
      <div className="mb-16">
        <div className="flex items-center gap-3 text-slate-400 mb-4 font-bold">
          <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
            <HardHat className="w-4 h-4 text-pro-emerald" />
          </div>
          <span className="text-xs uppercase tracking-widest">Engineer Operations</span>
        </div>
        <h1 className="text-6xl font-display font-bold text-pro-navy leading-none">Project <span className="text-slate-300">Marketplace</span></h1>
        <p className="text-slate-500 mt-6 font-medium max-w-xl text-lg">Browse active construction projects and submit your professional quotations.</p>
      </div>

      {!user.is_verified && (
        <div className="bg-white p-10 rounded-3xl border border-slate-100 mb-16 flex items-center gap-8 shadow-2xl shadow-slate-200">
          <div className="bg-pro-navy p-5 rounded-2xl shadow-xl shadow-pro-navy/20">
            <ShieldCheck className="w-10 h-10 text-pro-emerald" />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-pro-navy">Verification Pending</h3>
            <p className="text-slate-500 font-medium mt-1">Your credentials are being reviewed. You will be able to submit quotations once verified.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map(project => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 group cursor-pointer"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-pro-navy text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {project.user_name}
                </div>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{new Date(project.created_at).toLocaleDateString()}</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-pro-navy mb-8 leading-tight">{project.location} Project</h3>
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <MapPin className="w-4 h-4 text-pro-emerald" /> {project.location}
                </div>
                <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <Layers className="w-4 h-4 text-pro-emerald" /> {project.plot_area} SQ FT
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Budget Range</div>
                  <div className="text-2xl font-display font-bold text-pro-navy">₹{project.budget.toLocaleString()}</div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-pro-navy uppercase tracking-widest group-hover:text-pro-emerald transition-colors">View Details & Quote</span>
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-pro-emerald group-hover:text-white transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CostEstimateDashboard = ({ estimate }: { estimate: ConstructionEstimate }) => {
  const data = [
    { name: 'Cement', value: estimate.cement * 500, color: '#10b981' },
    { name: 'Bricks', value: estimate.bricks * 10, color: '#3b82f6' },
    { name: 'Steel', value: estimate.steel * 70, color: '#f59e0b' },
    { name: 'Sand', value: estimate.sand * 50, color: '#ef4444' },
    { name: 'Labor', value: estimate.labor_cost, color: '#8b5cf6' },
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <h3 className="text-2xl font-display font-bold text-pro-navy mb-8 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-pro-emerald" />
            Cost Breakdown
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => `₹${value.toLocaleString()}`}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <h3 className="text-2xl font-display font-bold text-pro-navy mb-8 flex items-center gap-3">
            <Layers className="w-6 h-6 text-pro-emerald" />
            Material Quantities
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Cement', value: `${estimate.cement.toFixed(0)} Bags`, icon: Building2 },
              { label: 'Bricks', value: `${estimate.bricks.toFixed(0)} Units`, icon: Layers },
              { label: 'Steel', value: `${estimate.steel.toFixed(0)} KG`, icon: HardHat },
              { label: 'Sand', value: `${estimate.sand.toFixed(0)} CU FT`, icon: MapPin },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <item.icon className="w-5 h-5 text-pro-emerald" />
                  </div>
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{item.label}</span>
                </div>
                <span className="text-lg font-bold text-pro-navy">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-pro-navy p-8 rounded-3xl text-white shadow-2xl shadow-pro-navy/20">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Labor Cost</div>
          <div className="text-3xl font-display font-bold">₹{estimate.labor_cost.toLocaleString()}</div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-slate-400">Material Cost</div>
          <div className="text-3xl font-display font-bold text-pro-navy">₹{estimate.material_cost.toLocaleString()}</div>
        </div>
        <div className="bg-pro-emerald p-8 rounded-3xl text-white shadow-2xl shadow-pro-emerald/20">
          <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-2">Total Estimated Cost</div>
          <div className="text-3xl font-display font-bold">₹{estimate.total_cost.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetails = ({ user }: { user: User }) => {
  const [data, setData] = useState<{ project: Project, estimate: ConstructionEstimate, quotations: Quotation[], documents: ProjectDocument[] } | null>(null);
  const [activeTab, setActiveTab] = useState<'estimate' | 'quotations' | 'chat' | 'documents'>('estimate');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then(res => res.json())
      .then(setData);
  }, [id]);

  if (!data) return (
    <div className="h-screen flex items-center justify-center bg-slate-50 construction-grid">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 border-4 border-pro-emerald border-t-transparent rounded-full animate-spin" />
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Retrieving Project Data...</span>
      </div>
    </div>
  );

  const { project, estimate, quotations, documents } = data;

  return (
    <div className="p-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <div className="flex items-center gap-3 text-slate-400 mb-4 font-bold">
            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-pro-emerald" />
            </div>
            <span className="text-xs uppercase tracking-widest">{project.location}</span>
          </div>
          <h1 className="text-6xl font-display font-bold text-pro-navy leading-none">Project <span className="text-slate-300">Details</span></h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-pro-navy text-white px-8 py-5 rounded-2xl shadow-xl shadow-pro-navy/20 border border-white/10">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Budget</div>
            <div className="text-3xl font-display font-bold">₹{project.budget.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
        {[
          { id: 'estimate', label: 'Cost Estimate', icon: <TrendingUp className="w-4 h-4" /> },
          { id: 'quotations', label: 'Engineer Quotations', icon: <ClipboardList className="w-4 h-4" /> },
          { id: 'chat', label: 'Messages', icon: <MessageSquare className="w-4 h-4" /> },
          { id: 'documents', label: 'Documents', icon: <FileText className="w-4 h-4" /> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-10 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center gap-3 transition-all whitespace-nowrap border shadow-sm ${
              activeTab === tab.id 
                ? 'bg-pro-navy text-white border-pro-navy shadow-pro-navy/20' 
                : 'bg-white text-slate-400 border-slate-100 hover:bg-slate-50'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'estimate' && (
          <motion.div 
            key="estimate"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <CostEstimateDashboard estimate={estimate} />
          </motion.div>
        )}

        {activeTab === 'quotations' && (
          <motion.div 
            key="quotations"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            <div className="lg:col-span-2 space-y-8">
              {quotations.map(q => (
                <div key={q.id} className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                        <UserIcon className="w-8 h-8 text-slate-300" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-pro-navy">{q.engineer_name}</h4>
                        <p className="text-xs font-bold text-pro-emerald uppercase tracking-widest">{q.engineer_specialization}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Quoted Price</div>
                      <div className="text-3xl font-display font-bold text-pro-navy">₹{q.price.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest mb-3 text-slate-400">Proposal</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">{q.proposal}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                      <Clock className="w-4 h-4 text-pro-emerald" /> Timeline: {q.timeline}
                    </div>
                    {user.role === 'user' && q.status === 'pending' && (
                      <div className="flex gap-4">
                        <button className="bg-pro-emerald text-white px-8 py-3 rounded-xl font-bold text-xs hover:bg-pro-emerald/90 transition-all shadow-lg shadow-pro-emerald/20">Accept</button>
                        <button className="bg-white text-red-500 border border-red-100 px-8 py-3 rounded-xl font-bold text-xs hover:bg-red-50 transition-all">Reject</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {quotations.length === 0 && (
                <div className="py-32 text-center bg-white rounded-3xl border-2 border-dashed border-slate-100">
                  <div className="bg-slate-50 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-slate-100 shadow-inner">
                    <ClipboardList className="w-12 h-12 text-slate-300" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-pro-navy">No Quotations Yet</h3>
                  <p className="text-slate-500 mt-3 font-medium max-w-md mx-auto">Engineers will review your project and send quotations soon.</p>
                </div>
              )}
            </div>
            <div className="space-y-8">
              {user.role === 'engineer' && (
                <div className="bg-pro-navy rounded-3xl p-10 text-white shadow-2xl shadow-pro-navy/30">
                  <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                    <IndianRupee className="w-6 h-6 text-pro-emerald" />
                    Send Quotation
                  </h3>
                  <EstimateForm projectId={project.id} onSubmitted={() => window.location.reload()} />
                </div>
              )}
              <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-xl font-display font-bold text-pro-navy mb-8 border-b border-slate-100 pb-4">Project Summary</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Area</span>
                    <span className="text-sm font-bold text-pro-navy">{project.plot_area} SQ FT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Floors</span>
                    <span className="text-sm font-bold text-pro-navy">{project.floors}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Quality</span>
                    <span className="text-sm font-bold text-pro-emerald uppercase tracking-widest">{project.material_quality}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'chat' && (
          <motion.div 
            key="chat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-3xl h-[700px] overflow-hidden flex flex-col shadow-2xl shadow-slate-200 border border-slate-100"
          >
            <Chat projectId={project.id} user={user} />
          </motion.div>
        )}

        {activeTab === 'documents' && (
          <motion.div 
            key="documents"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-2xl font-display font-bold text-pro-navy">Project Documents</h3>
              <button className="bg-pro-navy text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-pro-navy/90 transition-all">
                <Plus className="w-4 h-4 text-pro-emerald" /> Upload Document
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {documents.map(doc => (
                <div key={doc.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-pro-emerald transition-all group">
                  <FileText className="w-10 h-10 text-slate-300 mb-4 group-hover:text-pro-emerald transition-colors" />
                  <h4 className="font-bold text-pro-navy mb-1 truncate">{doc.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{new Date(doc.created_at).toLocaleDateString()}</p>
                </div>
              ))}
              {documents.length === 0 && (
                <div className="col-span-full py-20 text-center text-slate-400 font-medium">
                  No documents uploaded yet.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Chat = ({ projectId, user }: { projectId: number, user: User }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const s = io();
    setSocket(s);
    s.emit('join', projectId);
    s.emit('getMessages', projectId);
    
    s.on('loadMessages', setMessages);
    s.on('message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => { s.disconnect(); };
  }, [projectId]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !socket) return;
    socket.emit('sendMessage', {
      project_id: projectId,
      sender_id: user.id,
      content: input,
      created_at: new Date().toISOString()
    });
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="bg-pro-navy text-white p-6 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-pro-emerald rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <span className="text-xs font-bold uppercase tracking-widest">Project Communication Channel</span>
        </div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Encrypted</div>
      </div>
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender_id === user.id ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-5 rounded-2xl shadow-sm border ${msg.sender_id === user.id ? 'bg-pro-navy text-white border-pro-navy' : 'bg-white border-slate-100 text-pro-navy'}`}>
              <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${msg.sender_id === user.id ? 'text-slate-400' : 'text-pro-emerald'}`}>
                {msg.sender_id === user.id ? 'You' : 'Field Professional'}
              </div>
              <div className="text-sm font-medium leading-relaxed">{msg.content}</div>
              <div className={`text-[9px] mt-3 font-mono text-right ${msg.sender_id === user.id ? 'text-slate-500' : 'text-slate-400'}`}>
                {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>
      <form onSubmit={send} className="p-6 bg-white border-t border-slate-100 flex gap-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium"
        />
        <button type="submit" className="bg-pro-emerald text-white p-4 rounded-xl hover:bg-pro-emerald/90 transition-all shadow-lg shadow-pro-emerald/20">
          <Send className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

const EstimateForm = ({ projectId, onSubmitted }: { projectId: number, onSubmitted: () => void }) => {
  const [price, setPrice] = useState('');
  const [timeline, setTimeline] = useState('');
  const [proposal, setProposal] = useState('');
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/quotations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project_id: projectId,
          engineer_id: user.id,
          price: Number(price),
          timeline,
          proposal
        })
      });
      if (res.ok) {
        onSubmitted();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Quoted Price (₹)</label>
        <input 
          type="number" 
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium text-white"
          placeholder="0.00"
        />
      </div>
      <div>
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Estimated Timeline</label>
        <input 
          type="text" 
          required
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium text-white"
          placeholder="e.g. 12-14 Weeks"
        />
      </div>
      <div>
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Proposal Details</label>
        <textarea 
          required
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
          className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-pro-emerald focus:ring-4 focus:ring-pro-emerald/5 outline-none transition-all font-medium text-white h-32 resize-none"
          placeholder="Describe your approach and technical insights..."
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-pro-emerald text-white py-5 rounded-2xl font-bold text-lg hover:bg-pro-emerald/90 transition-all shadow-xl shadow-pro-emerald/20 disabled:opacity-50"
      >
        {loading ? 'SENDING...' : 'SEND QUOTATION'}
      </button>
    </form>
  );
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser) setUser(JSON.parse(savedUser));
    } catch (err) {
      console.error('Failed to parse saved user:', err);
      localStorage.removeItem('user');
    }
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('user', JSON.stringify(u));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
        <Navbar user={user} onLogout={handleLogout} />
        
        <Routes>
          <Route path="/" element={
            user ? (
              user.role === 'admin' ? <AdminDashboard /> : (user.role === 'engineer' ? <EngineerDashboard user={user} /> : <UserDashboard user={user} />)
            ) : (
              <LandingPage />
            )
          } />
          
          <Route path="/login" element={<AuthPage onLogin={handleLogin} />} />
          <Route path="/marketplace" element={<EngineerMarketplace user={user!} />} />
          <Route path="/project/:id" element={<ProjectDetails user={user!} />} />
          <Route path="/new-project" element={<NewProjectForm user={user!} />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}
