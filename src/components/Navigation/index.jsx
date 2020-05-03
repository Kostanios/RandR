import React from 'react';
import { useSelector } from 'react-redux';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

export default ({ renderMobile }) => {
  const isLogined = useSelector(state => state.auth.isLogined)
  const NavComponent = renderMobile ? MobileNavigation : DesktopNavigation;
  return (
    <NavComponent logined={isLogined} />
  );
};
