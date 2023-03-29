import * as React from 'react';
import { GlobalStyles } from '../styles';

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
