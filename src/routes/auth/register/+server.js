import { json } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";

const PUBLIC_SUPABASE_URL = "https://dheyptucuuefycegyeqx.supabase.co"
const PUBLIC_SUPABASE_ANON_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { name, email, password, userType } = await request.json();

  try {
    //console.log(name, email, password, userType);
    const { user, err } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          userType,
        },
      },
    });

    if (err) {
      throw error(500, "Failed to sign up: " + err.message);
    }

    return json({ user });
  } catch (error) {
    if (err.body && typeof err.body.message === "string") {
      throw error(500, "Failed to register user: " + err.body.message);
    } else {
      console.error(err);
      throw error(500, "Failed to register user: Unexpected error.");
    }
  }
}
