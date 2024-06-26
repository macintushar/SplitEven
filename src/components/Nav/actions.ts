"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function handleSignOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    return error;
  }

  redirect("/");
}

export async function getUserData() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  return { data, error };
}
