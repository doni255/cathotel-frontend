import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

const Layout = ({ children, showNavbar = true, showFooter = true }: LayoutProps) => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
    }}>
      {showNavbar && <Navbar />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
