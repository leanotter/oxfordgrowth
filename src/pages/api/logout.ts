import type { APIRoute } from "astro";
import { getSessionCookieName } from "../../lib/auth.ts";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete(getSessionCookieName(), {
    path: "/",
  });

  return redirect("/login/");
};
