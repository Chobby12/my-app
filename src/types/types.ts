// File: src/types/types.ts
export interface User {
    username: string;
    role: "Admin" | "Editor" | "Viewer";
  }
  
  // Add this line at the end to make sure it's treated as a module
  export {};