import { defineMiddleware } from "astro:middleware";
import { getAuthConfig, getSessionCookieName, isValidSession } from "./lib/auth.ts";

const PUBLIC_PATHS = new Set(["/login/", "/api/login/", "/api/logout/"]);

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  if (PUBLIC_PATHS.has(pathname)) {
    return next();
  }

  const { secret } = getAuthConfig();
  const sessionCookie = context.cookies.get(getSessionCookieName())?.value;
  const validSession = await isValidSession(sessionCookie, secret);

  if (validSession) {
    return next();
  }

  const nextPath = pathname === "/" ? "/" : `${pathname}${search}`;
  return context.redirect(`/login/?next=${encodeURIComponent(nextPath)}`);
});
