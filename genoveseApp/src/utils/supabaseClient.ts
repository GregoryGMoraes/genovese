import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://oqhlhxrsvwdgxgmdledm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xaGxoeHJzdndkZ3hnbWRsZWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4OTA4NjUsImV4cCI6MjA2MDQ2Njg2NX0.Ko1HMLxByElwDfIbpvi1E-Tm1jAQp-QIkYdVnYsQ2AA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);