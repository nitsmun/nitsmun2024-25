// import dotenv from 'dotenv';
import { createClient } from "@supabase/supabase-js";

// dotenv.config();

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
