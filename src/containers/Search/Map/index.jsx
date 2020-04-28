  
import React from 'react';
import { useSelector } from 'react-redux';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import styles from './styles.module.scss';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYW50b25zb2xvZGtvZiIsImEiOiJjazlraHczenUwaDYzM2hwOGJ1OWp4dzhxIn0.1okx0XI9FfV9g-NQZtVpLA'
});

const MapComponent = () => {
  const { latitude, longitude } = useSelector(state => state.app.location);
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v10"
      center={[longitude, latitude]}
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[longitude, latitude]} />
      </Layer>
    </Map>
  )
}

export default MapComponent;

