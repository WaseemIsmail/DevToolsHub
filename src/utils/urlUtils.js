// src/utils/urlUtils.js

// Encode URL
export function encodeURL(input) {
  try {
    const encoded = encodeURIComponent(input);

    return {
      success: true,
      data: encoded
    };

  } catch {
    return {
      success: false,
      error: "Failed to encode URL"
    };
  }
}


// Decode URL
export function decodeURL(input) {
  try {
    const decoded = decodeURIComponent(input);

    return {
      success: true,
      data: decoded
    };

  } catch {
    return {
      success: false,
      error: "Invalid encoded URL"
    };
  }
}