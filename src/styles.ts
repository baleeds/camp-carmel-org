import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    // Global dimensions
    --site-width: 1200px;
    
    // Color palette
    --color-primary: #0B4B5E;
    --color-blank: white;
    --color-text-default: #2B2B2B;
  }
  
  html, body {
    font-family: 'Open Sans', sans-serif;
    color: var(--color-text-default);
    margin: 0;
    padding: 60px 0 0 0;
  }
  
  h1, h2, h3 {
    font-family: 'Patua One', serif;
  }
  
  h1 {
    font-size: 40px;
    line-height: 38px;
    color: var(--color-primary);
  }
  
  h2 {
    font-size: 32px;
    line-height: 34px;
  }
  
  h3 {
    font-size: 24px;
    line-height: 28px;
  }
  
  p {
    font-size: 18px;
    line-height: 28px;
  }
  
  a {
    color: var(--color-primary);
  }
  
  button {
    margin: 0;
    padding: 0;
    background: 0;
    border: 0;
    box-shadow: none;
    font-size: 16px;
    cursor: pointer;
  }
`;
