// File: src/styles/theme.ts
export const colors = {
    primary: "#4361ee",
    secondary: "#3f37c9",
    success: "#4cc9f0",
    danger: "#f72585",
    warning: "#f8961e",
    info: "#4895ef",
    light: "#f8f9fa",
    dark: "#212529",
    gray: "#6c757d",
    grayLight: "#e9ecef",
    white: "#ffffff",
    textPrimary: '#212529',
    
    // Role-specific colors
    admin: "#f72585",
    adminLight: "#fde8f0",
    editor: "#4361ee",
    editorLight: "#edf0fd",
    viewer: "#4cc9f0",
    viewerLight: "#ebf9fd",
  };
  
  // For dark mode support later
  export const darkModeColors = {
    background: "#121212",
    surface: "#1e1e1e",
    primary: "#6979f8",
    text: "#ffffff",
    textSecondary: "#a0a0a0",
  };
  
  export const shadows = {
    sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    md: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    lg: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    xl: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  };
  
  export const borderRadius = {
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
    circle: "50%",
  };
  
  export const spacing = {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  };
  
  export const typography = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      xxl: "2rem",
      xxxl: "3rem",
    },
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  };