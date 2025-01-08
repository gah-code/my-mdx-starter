import React from 'react';
import { Link } from 'gatsby';
import { MobileNavContainer } from '../common/StyledComponents';

export default function MobileNav({ open, closeMenu }) {
  return (
    <MobileNavContainer open={open}>
      <Link to='/' onClick={closeMenu}>
        Home
      </Link>
      <Link to='/about' onClick={closeMenu}>
        About
      </Link>
      <Link to='/blog' onClick={closeMenu}>
        Blog
      </Link>
    </MobileNavContainer>
  );
}
