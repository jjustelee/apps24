import { isIP } from "node:net";

export function normalizeIp(value: string) {
  return value.trim().replace(/^\[|\]$/g, "").replace(/^::ffff:/i, "");
}

export function isPublicIp(value: string) {
  const ip = normalizeIp(value).toLowerCase();
  const version = isIP(ip);
  if (version === 4) {
    const [a, b, c] = ip.split(".").map(Number);
    return !(a === 0 || a === 10 || a === 127 || a >= 224 ||
      (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) ||
      (a === 192 && b === 0 && (c === 0 || c === 2)) ||
      (a === 198 && (b === 18 || b === 19 || (b === 51 && c === 100))) ||
      (a === 203 && b === 0 && c === 113));
  }
  // Limit geolocation to global unicast, excluding documentation ranges.
  return version === 6 && /^[23]/.test(ip) && !/^2001:0?db8:/i.test(ip) && !ip.startsWith("3fff:");
}

export function getPublicClientIp(headers: Headers) {
  for (const name of ["x-vercel-forwarded-for", "x-forwarded-for", "x-real-ip", "cf-connecting-ip", "true-client-ip"]) {
    const value = headers.get(name)?.split(",").map(normalizeIp).find(isPublicIp);
    if (value) return value;
  }
  return "";
}
