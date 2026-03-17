// src/utils/converterUtils.js

// JSON → CSV
export function jsonToCSV(jsonInput) {
  try {
    const data = JSON.parse(jsonInput);

    if (!Array.isArray(data)) {
      return {
        success: false,
        error: "JSON must be an array of objects"
      };
    }

    const headers = Object.keys(data[0]);

    const csvRows = [
      headers.join(","),

      ...data.map(row =>
        headers.map(field => JSON.stringify(row[field] ?? "")).join(",")
      )
    ];

    return {
      success: true,
      data: csvRows.join("\n")
    };

  } catch {
    return {
      success: false,
      error: "Invalid JSON input"
    };
  }
}


// CSV → JSON
export function csvToJSON(csvInput) {
  try {
    const lines = csvInput.trim().split("\n");

    const headers = lines[0].split(",");

    const result = lines.slice(1).map(line => {

      const values = line.split(",");

      const obj = {};

      headers.forEach((header, index) => {
        obj[header.trim()] = values[index]?.trim();
      });

      return obj;

    });

    return {
      success: true,
      data: JSON.stringify(result, null, 2)
    };

  } catch {
    return {
      success: false,
      error: "Invalid CSV format"
    };
  }
}