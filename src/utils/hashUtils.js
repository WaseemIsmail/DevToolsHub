// src/utils/hashUtils.js

// Convert ArrayBuffer to Hex string
function bufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Generate SHA-256 hash
export async function generateSHA256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return bufferToHex(hashBuffer);
}

// Generate SHA-1 hash
export async function generateSHA1(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  const hashBuffer = await crypto.subtle.digest("SHA-1", data);

  return bufferToHex(hashBuffer);
}