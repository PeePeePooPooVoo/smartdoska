import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = window.env?.SUPABASE_URL || 'YOUR_URL';
const SUPABASE_KEY = window.env?.SUPABASE_KEY || 'YOUR_KEY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);