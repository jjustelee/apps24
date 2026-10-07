export function encodeBase64Text(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}
export function decodeBase64Text(value: string) {
  let binary: string;
  try { binary = atob(value); } catch { throw new Error("base64"); }
  try { return new TextDecoder("utf-8", { fatal: true }).decode(Uint8Array.from(binary, char => char.charCodeAt(0))); }
  catch { throw new Error("utf8"); }
}
