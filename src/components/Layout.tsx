import * as React from 'react';
import { Header } from './Header';
import { Page } from './Page';
import { Footer } from './Footer';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Page>
      <Header />
      <main>{children}</main>
      <Footer />
    </Page>
  );
};

export default Layout;
