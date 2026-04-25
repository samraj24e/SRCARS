import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Only initialize if we have a valid URL and Key
// This prevents the app from crashing if environment variables are missing
export const supabase = (supabaseUrl && supabaseAnonKey && supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY_HERE') 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;
