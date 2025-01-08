import React from 'react';
import { FooterContainer } from '../common/StyledComponents';

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} My Site</p>
    </FooterContainer>
  );
}
