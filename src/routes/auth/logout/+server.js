import { json } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$lib/env";

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

/** @type {import('./$types').RequestHandler} */
export async function POST({ _request }) {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(500, "Failed to logout... " + err.message);
    }

    return json();
  } catch (error) {
    if (error.body && typeof error.body.message === "string") {
      throw new Error(500, "Failed to logout: " + err.body.message);
    } else {
      console.error(error);
      throw new Error(500, "Failed to logout: Unexpected error.");
    }
  }
}
