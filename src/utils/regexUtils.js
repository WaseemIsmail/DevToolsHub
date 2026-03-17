// src/utils/regexUtils.js

export function testRegex(pattern, text, flags = "g") {
  try {
    const regex = new RegExp(pattern, flags);

    const matches = text.match(regex);

    return {
      success: true,
      matches: matches || []
    };

  } catch (error) {

    return {
      success: false,
      error: "Invalid Regular Expression"
    };

  }
}