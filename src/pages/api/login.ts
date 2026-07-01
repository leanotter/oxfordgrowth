import type { APIRoute } from "astro";
import {
  createSessionValue,
  getAuthConfig,
  getSessionCookieName,
} from "../../lib/auth.ts";

export const POST: APIRoute = async ({ request, cookies, redirect, url }) => {
  const form = await request.formData();
  const username = String(form.get("username") ?? "");
  const password = String(form.get("password") ?? "");
  const next = String(form.get("next") ?? "/");
  const safeNext = next.startsWith("/") ? next : "/";

  const config = getAuthConfig();

  if (username !== config.username || password !== config.password) {
    return redirect(`/login/?error=1&next=${encodeURIComponent(safeNext)}`);
  }

  const sessionValue = await createSessionValue(config.username, config.secret);
  cookies.set(getSessionCookieName(), sessionValue, {
    httpOnly: true,
    sameSite: "lax",
    secure: url.protocol === "https:",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return redirect(safeNext);
};
