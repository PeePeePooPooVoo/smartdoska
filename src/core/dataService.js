import { supabase } from './supabaseClient.js';

export async function getNotes() {
  const { data, error } = await supabase
    .from('notes')
    .select('*');

  if (error) throw error;
  return data;
}

export async function addNote(note) {
  const { data, error } = await supabase
    .from('notes')
    .insert([note]);

  if (error) throw error;
  return data;
}