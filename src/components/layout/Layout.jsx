import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { MDXProvider } from '@mdx-js/react';
import styled from '@emotion/styled';
import MobileNav from './MobileNav';
import Overlay from './Overlay';
import { SiteWrapper, Main } from '../common/StyledComponents';

export default function Layout({ children, pageContext }) {
  const { frontmatter } = pageContext || {};
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <SiteWrapper>
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Overlay open={menuOpen} onClick={closeMenu} />
      <MobileNav open={menuOpen} closeMenu={closeMenu} />
      <Main>
        <MDXProvider>{children}</MDXProvider>
      </Main>
      <Footer />
    </SiteWrapper>
  );
}
