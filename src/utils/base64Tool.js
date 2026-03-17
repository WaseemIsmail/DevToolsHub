export function encodeBase64(text) {
  try {
    const encoded = btoa(text);

    return {
      success: true,
      data: encoded
    };

  } catch (error) {

    return {
      success: false,
      error: "Encoding failed"
    };

  }
}

export function decodeBase64(base64) {
  try {
    const decoded = atob(base64);

    return {
      success: true,
      data: decoded
    };

  } catch (error) {

    return {
      success: false,
      error: "Invalid Base64 string"
    };

  }
}