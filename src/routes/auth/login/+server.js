import { json } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";

const PUBLIC_SUPABASE_URL = "https://dheyptucuuefycegyeqx.supabase.co"
const PUBLIC_SUPABASE_ANON_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY

// @ts-ignore
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { email, password } = await request.json();

  try {
    const { data, err } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (err) {
      throw new Error(500, "Failed to login: " + err.message);
    }

    return json({ user: data.user });
  } catch (error) {
    if (error.body && typeof error.body.message === "string") {
      throw new Error(500, "Failed to login: " + err.body.message);
    } else {
      console.error(error);
      throw new Error(500, "Failed to login: Unexpected error.");
    }
  }
}
