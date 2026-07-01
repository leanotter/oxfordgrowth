const encoder = new TextEncoder();
const SESSION_COOKIE = "research_session";

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) {
    return false;
  }

  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) {
    mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }

  return mismatch === 0;
}

async function signValue(value: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    {
      name: "HMAC",
      hash: "SHA-256",
    },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return Buffer.from(signature).toString("base64url");
}

export function getAuthConfig() {
  const username = import.meta.env.SITE_USERNAME ?? process.env.SITE_USERNAME;
  const password = import.meta.env.SITE_PASSWORD ?? process.env.SITE_PASSWORD;
  const secret = import.meta.env.SESSION_SECRET ?? process.env.SESSION_SECRET;

  if (!username || !password || !secret) {
    throw new Error(
      "Missing SITE_USERNAME, SITE_PASSWORD, or SESSION_SECRET. Add them to a local .env file or your deployment environment.",
    );
  }

  return { username, password, secret };
}

export async function createSessionValue(username: string, secret: string) {
  const signature = await signValue(username, secret);
  return `${username}.${signature}`;
}

export async function isValidSession(sessionValue: string | undefined, secret: string) {
  if (!sessionValue) {
    return false;
  }

  const [username, signature] = sessionValue.split(".");
  if (!username || !signature) {
    return false;
  }

  const expected = await signValue(username, secret);
  return timingSafeEqual(signature, expected);
}

export function getSessionCookieName() {
  return SESSION_COOKIE;
}
