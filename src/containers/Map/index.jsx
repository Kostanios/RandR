import React, { Fragment } from 'react';
import { COMPONENT_MAP_BOTTOM_SHEET } from 'utils/constants/components';
import MapComponent from './MapComponent';
import BottomSheet from '../BottomSheet';

export default () => {
  return (
    <Fragment>
      <MapComponent />
      <BottomSheet componentName={COMPONENT_MAP_BOTTOM_SHEET} />
    </Fragment>
  );
};
