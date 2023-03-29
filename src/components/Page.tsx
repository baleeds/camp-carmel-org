import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  :root {
    // Global dimensions
    --site-width: 1200px;
    
    // Color palette
    --color-primary: #0B4B5E;
    --color-blank: white;
    --color-text-default: #2B2B2B;
  }
`;
