  
import React from 'react';
import { useSelector } from 'react-redux';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// eslint-disable-next-line
import styles from './styles.module.scss';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYW50b25zb2xvZGtvZiIsImEiOiJjazlvNnYwbGcwNzdrM2xtcjA5YjY5NGQ2In0.7pHzxrf9nSmgKVqYL5awaQ'
});

const MapComponent = () => {
  const { latitude, longitude } = useSelector(state => state.app.location);
  return (
    <Map
      // eslint-disable-next-line
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

