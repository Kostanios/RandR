import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layer, Feature, Image } from 'react-mapbox-gl';
import { getDataThunk, setCurrentSpot } from 'redux/slices/dataSlice';
import {
  setBottomSheetComponent,
  setBottomSheetPosition,
} from 'redux/slices/bottomSheetSlice';
import { COMPONENT_SPOT_PAGE } from 'utils/constants/components';
import Map from '../MapInit';
import styles from './styles.module.scss';

const MapComponent = () => {
  const dispatch = useDispatch();
  const defaultLocation = useSelector((state) => state.app.location);
  const spotsData = useSelector((state) => state.spots.spotsData) || [];
  useEffect(() => {
    dispatch(getDataThunk());
    // eslint-disable-next-line
  }, []);
  console.log(spotsData);
  const features = useMemo(
    () =>
      spotsData.map((spot) => (
        <Feature
          key={spot.id}
          coordinates={[spot.longitude, spot.latitude]}
          properties={{ id: spot.id }}
          onClick={() => {
            // dispatch(setCurrentSpot({ id: spot.id }));
            dispatch(setBottomSheetComponent({ name: COMPONENT_SPOT_PAGE }));
            dispatch(setBottomSheetPosition(2));
          }}
        />
      )),
    [spotsData, dispatch]
  );
  return (
    <div className={styles.mapWrapper}>
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        center={[defaultLocation.longitude, defaultLocation.latitude]}
        refreshExpiredTiles={false}
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
      >
        <Image
          id={'pizza-pin'}
          url={`${process.env.PUBLIC_URL}/assets/pins/pizzaPin.png`}
        />
        <Layer type="symbol" layout={{ 'icon-image': 'pizza-pin' }}>
          {features}
        </Layer>
      </Map>
    </div>
  );
};

export default MapComponent;
