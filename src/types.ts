export interface User {
  id: number;
  email: string;
  role: 'user' | 'engineer' | 'admin';
  name: string;
  specialization?: string;
  is_verified: number;
  experience_years?: number;
  rating?: number;
  bio?: string;
}

export interface Project {
  id: number;
  user_id: number;
  plot_area: number;
  floors: number;
  rooms_per_floor: number;
  budget: number;
  location: string;
  style: string;
  status: string;
  material_quality: 'Basic' | 'Standard' | 'Premium';
  work_type: string;
  requirements_json?: string;
  created_at: string;
  user_name?: string;
}

export interface ConstructionEstimate {
  id: number;
  project_id: number;
  cement: number;
  bricks: number;
  steel: number;
  sand: number;
  labor_cost: number;
  material_cost: number;
  total_cost: number;
  created_at: string;
}

export interface Quotation {
  id: number;
  project_id: number;
  engineer_id: number;
  price: number;
  proposal: string;
  timeline: string;
  status: 'pending' | 'accepted' | 'rejected';
  engineer_name?: string;
  engineer_specialization?: string;
  created_at: string;
}

export interface ProjectDocument {
  id: number;
  project_id: number;
  name: string;
  url: string;
  uploaded_by: number;
  created_at: string;
}

export interface Message {
  id: number;
  project_id: number;
  sender_id: number;
  receiver_id: number;
  content: string;
  created_at: string;
}
