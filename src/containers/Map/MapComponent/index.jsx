  
import React from 'react';
import { useSelector } from 'react-redux';
import { Layer, Feature, Image } from 'react-mapbox-gl';
import Map from '../MapInit';
import MockPizza from 'mocks/pizzaPin.png';
import styles from './styles.module.scss';

const MapComponent = () => {
  const defaultLocation = useSelector(state => state.app.location);
  const userLocation = useSelector(state => state.app.userLocation);
  return (
    <div className={styles.mapWrapper}>
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        center={[defaultLocation.longitude, defaultLocation.latitude]}
        containerStyle={{
          height: '100%',
          width: '100%'
        }}
      >
        <Image id={'pizza-pin'} url={MockPizza} />
        <Layer type="symbol" layout={{ 'icon-image': 'pizza-pin' }}>
          <Feature coordinates={[defaultLocation.longitude, defaultLocation.latitude]} />
          <Feature coordinates={[userLocation.longitude, userLocation.latitude]} />
        </Layer>
      </Map>
    </div>
  )
}

export default MapComponent;

