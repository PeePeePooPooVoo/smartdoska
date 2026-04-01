import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = window.env?.SUPABASE_URL;
const SUPABASE_KEY = window.env?.SUPABASE_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

window.supabase = supabase;