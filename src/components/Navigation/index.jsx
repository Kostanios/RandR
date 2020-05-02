import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuthComponent } from 'redux/slices/authSlice';
import { setGlobalWindowComponent } from 'redux/slices/globalWindowSlice';
import { COMPONENT_AUTH } from 'utils/constants/components';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

export default ({ renderMobile }) => {
  const dispatch = useDispatch();
  const NavComponent = renderMobile ? MobileNavigation : DesktopNavigation
  const showAuthPopup = () => {
    dispatch(setAuthComponent());
    dispatch(setGlobalWindowComponent({
      name: COMPONENT_AUTH
    }))
  }
  return (
    <NavComponent showAuthPopup={showAuthPopup} />
  );
};
