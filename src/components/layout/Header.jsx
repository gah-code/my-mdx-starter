import React from 'react';
import { Link } from 'gatsby';
import HamburgerButton from './HamburgerButton';
import { HeaderContainer, Nav } from '../common/StyledComponents';

export default function Header({ toggleMenu, menuOpen }) {
  return (
    <HeaderContainer>
      <HamburgerButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </Nav>
    </HeaderContainer>
  );
}
