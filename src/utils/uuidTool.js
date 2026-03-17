// src/utils/uuidTool.js

// Generate a single UUID
export function generateUUID() {
  return crypto.randomUUID();
}

// Generate multiple UUIDs
export function generateMultipleUUIDs(count = 1) {
  const uuids = [];
  
  for (let i = 0; i < count; i++) {
    uuids.push(crypto.randomUUID());
  }

  return uuids;
}