import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    // Global dimensions
    --site-width: 1200px;
    --radius: 12px;

    // Color palette
    // Deep river teal stays the anchor color; warm cream and a rust accent bring in the mountains.
    --color-primary: #0B4B5E;
    --color-primary-light: #2E6B7C;
    --color-primary-dark: #08394A;
    --color-secondary: #0b71c3;
    --color-secondary-light: #2989d7;
    --color-accent: #A44A22;
    --color-accent-dark: #8A3C19;
    --color-blank: white;
    --color-cream: #FAF6EE;

    --color-text-default: #2A2622;
    --color-text-medium: #5A534B;

    --color-border-light: #E8E1D3;

    --color-background-light: #F1EADC;
    --color-background-medium: #EBDDC3;
    --color-background-blank: var(--color-cream);
    --color-background-none: transparent;

    --font-stack: 'Source Sans 3', 'Segoe UI', Tahoma, sans-serif;
    --font-stack-secondary: 'Fraunces', Georgia, serif;
  }

  * {
    box-sizing: border-box;

    scroll-margin-top: 80px;
    scroll-snap-margin-top: 80px; /* iOS 11 and older */
  }

  html, body {
    font-family: var(--font-stack);
    color: var(--color-text-default);
    background-color: var(--color-cream);
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  input, textarea, button {
    font-family: var(--font-stack);
    color: var(--color-text-default);
  }

  h1, h2, h3, h4 {
    font-family: var(--font-stack-secondary);
    font-weight: 600;
    letter-spacing: -0.01em;

    em {
      font-weight: 400;
      opacity: 0.75;
    }

    &.subtext {
      margin-top: -12px;
    }
  }

  h1 {
    font-size: clamp(34px, 2.6vw + 20px, 52px);
    line-height: 1.08;
    color: var(--color-primary);
  }

  h2 {
    font-size: clamp(27px, 1.6vw + 18px, 38px);
    line-height: 1.15;
  }

  h3 {
    font-size: clamp(20px, 0.8vw + 16px, 26px);
    line-height: 1.25;
  }

  h4 {
    font-family: var(--font-stack);
    font-size: 18px;
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: .2em;
  }

  li, p, label, input, textarea {
    font-size: 17px;
    line-height: 1.65;
  }

  li {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 550px) {
    p, li, label, input, textarea {
      font-size: 19px;
    }
  }

  a {
    color: var(--color-primary);
    text-underline-offset: 3px;
  }

  // Keyboard focus ring (mouse clicks don't trigger :focus-visible)
  :focus-visible {
    outline: 3px solid var(--color-accent);
    outline-offset: 2px;
  }

  .eyebrow {
    font-family: var(--font-stack);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-accent);
    margin: 0 0 12px;
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
