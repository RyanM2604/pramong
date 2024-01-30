import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dheyptucuuefycegyeqx.supabase.co";
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function load() {
    const { data } = await supabase.auth.getUser()
  }