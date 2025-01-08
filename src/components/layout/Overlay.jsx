import React from 'react';
import { OverlayContainer } from '../common/StyledComponents';

export default function Overlay({ open, onClick }) {
  return <OverlayContainer open={open} onClick={onClick} />;
}
