export function formatJSON(input) {
  try {
    const parsed = JSON.parse(input);
    return {
      success: true,
      data: JSON.stringify(parsed, null, 2)
    };
  } catch (error) {
    return {
      success: false,
      error: "Invalid JSON format"
    };
  }
}