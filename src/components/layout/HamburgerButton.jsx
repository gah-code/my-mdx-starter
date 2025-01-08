import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Hamburger } from '../common/StyledComponents';

export default function HamburgerButton({ toggleMenu, menuOpen }) {
  return (
    <Hamburger onClick={toggleMenu}>
      {menuOpen ? <FaTimes /> : <FaBars />}
    </Hamburger>
  );
}
