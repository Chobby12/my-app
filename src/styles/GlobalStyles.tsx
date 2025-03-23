// // File: src/styles/GlobalStyles.tsx
// import React from "react";
// import { colors, shadows, typography } from "./theme";

// // This component will be used to inject global styles
// const GlobalStyles: React.FC = () => (
//   <style jsx global>{`
//     * {
//       box-sizing: border-box;
//       margin: 0;
//       padding: 0;
//     }
    
//     body {
//       font-family: ${typography.fontFamily};
//       font-size: ${typography.fontSizes.md};
//       line-height: 1.5;
//       color: ${colors.dark};
//       background-color: #f5f7fa;
//     }
    
//     a {
//       color: ${colors.primary};
//       text-decoration: none;
//       transition: color 0.2s;
//     }
    
//     a:hover {
//       color: ${colors.secondary};
//     }
    
//     button {
//       cursor: pointer;
//       font-family: inherit;
//       transition: all 0.2s ease;
//     }
    
//     h1, h2, h3, h4, h5, h6 {
//       margin-bottom: 0.5rem;
//       font-weight: ${typography.fontWeights.semibold};
//       line-height: 1.2;
//     }
    
//     h1 {
//       font-size: ${typography.fontSizes.xxl};
//     }
    
//     h2 {
//       font-size: ${typography.fontSizes.xl};
//     }
    
//     h3 {
//       font-size: ${typography.fontSizes.lg};
//     }
    
//     .container {
//       width: 100%;
//       max-width: 1200px;
//       margin: 0 auto;
//       padding: 0 1rem;
//     }
    
//     .page-container {
//       padding: 2rem 1rem;
//     }
    
//     .card {
//       background-color: ${colors.white};
//       border-radius: 8px;
//       box-shadow: ${shadows.sm};
//       padding: 1.5rem;
//       margin-bottom: 1.5rem;
//     }
    
//     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
//   `}</style>
// );

// export default GlobalStyles;

import React from "react";
import { colors, shadows, typography } from "./theme";

// Create a standard CSS style string
const globalStylesCSS = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 
  body {
    font-family: ${typography.fontFamily};
    font-size: ${typography.fontSizes.md};
    line-height: 1.5;
    color: ${colors.dark};
    background-color: #f5f7fa;
  }
 
  a {
    color: ${colors.primary};
    text-decoration: none;
    transition: color 0.2s;
  }
 
  a:hover {
    color: ${colors.secondary};
  }
 
  button {
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease;
  }
 
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-weight: ${typography.fontWeights.semibold};
    line-height: 1.2;
  }
 
  h1 {
    font-size: ${typography.fontSizes.xxl};
  }
 
  h2 {
    font-size: ${typography.fontSizes.xl};
  }
 
  h3 {
    font-size: ${typography.fontSizes.lg};
  }
 
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
 
  .page-container {
    padding: 2rem 1rem;
  }
 
  .card {
    background-color: ${colors.white};
    border-radius: 8px;
    box-shadow: ${shadows.sm};
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

// This component will be used to inject global styles
const GlobalStyles: React.FC = () => (
  <>
    <style>{globalStylesCSS}</style>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

export default GlobalStyles;