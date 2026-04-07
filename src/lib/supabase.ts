import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bvcshihvxbbhpgasdlgg.supabase.co';
const supabaseAnonKey = 'sb_publishable_ujIPDiMTQ26CPx_Jekm4uQ_odKQkSM3';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
