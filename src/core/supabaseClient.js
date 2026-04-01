import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lucbjiyxzpwtbbqphgqw.supabase.co';
const supabaseKey = 'sb_publishable_-S8k8zkmNgnl6EddPawrNg_ecf5VIe4';

// Создаём клиент
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// Делаем глобально доступным
window.supabase = supabaseClient;

// Если нужно, можно экспортировать для модулей
export { supabaseClient as supabase };