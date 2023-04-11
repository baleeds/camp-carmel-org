import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    // Global dimensions
    --site-width: 1200px;

    // Color palette
    --color-primary: #0B4B5E;
    --color-primary-light: #316d7e;
    --color-blank: white;
    
    --color-text-default: #2B2B2B;
    --color-text-medium: #494949;
    
    --color-border-light: #EEEEEE;
    
    --color-background-light: #0b4b5e17;
    --color-background-blank: white;
    --color-background-none: transparent;
  }

  * {
    box-sizing: border-box;
    
    scroll-margin-top: 72px;
    scroll-snap-margin-top: 72px; /* iOS 11 and older */
  }

  html, body {
    font-family: 'Open Sans', sans-serif;
    color: var(--color-text-default);
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    font-family: 'Patua One', serif;
    
    em {
      opacity: 0.6;
    }
  }

  h1 {
    font-size: 32px;
    line-height: 1em;
    font-weight: normal;
    color: var(--color-primary);
  }

  h2 {
    font-size: 24px;
    line-height: 1.1em;
    font-weight: normal;
  }

  h3 {
    font-size: 18px;
    line-height: 1.2em;
    font-weight: normal;
  }
  
  h4 {
    font-size: 15px;
    line-height: 1.2em;
    font-weight: bold;
    margin-bottom: .2em;
  }

  li, p {
    font-size: 15px;
    line-height: 1.6em;
  }
  
  li {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 550px) {
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 24px;
    }
    
    h4 {
      font-size: 18px;
    }

    p, li {
      font-size: 18px;
    }
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
