import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Container, Content, Text } from 'native-base';
import MapView, { Marker } from 'react-native-maps';
import AwesomeButton from 'react-native-really-awesome-button';

import BottomSheet from 'reanimated-bottom-sheet';
import RightControls from '@components/Search/Controls/Right';
import SheetSection from '@components/Search/BottomSheet/Section';

import styles from './styles.module.scss';

export default ({
  data,
  location,
  mapViewRef,
  bottomSheet,
  markerCallback,
  onOrder
}) => {
  useEffect(() => {
    if (bottomSheet.show) {
      bottomSheet.ref.current.snapTo(0);
    }
  }, [bottomSheet]);

  const renderHeader = () => <Text style={styles.test}>Header</Text>;
  const renderContent = () => (
    <View style={styles.bottomSheetContent}>
      <SheetSection>
        <Text style={styles.textHeading}>Кухня</Text>
        <Text style={styles.text}>{bottomSheet.data.cuisine}</Text>
      </SheetSection>
      <SheetSection>
        <Text style={styles.textHeading}>Описание</Text>
        <Text style={styles.text}>{bottomSheet.data.full_description}</Text>
      </SheetSection>
      <SheetSection>
        <Text style={styles.textHeading}>Адрес</Text>
        <Text style={styles.text}>{bottomSheet.data.address}</Text>
      </SheetSection>
      <SheetSection>
        <Text style={styles.textHeading}>Режим работы</Text>
        <Text style={styles.text}>{bottomSheet.data.time}</Text>
      </SheetSection>
      <SheetSection>
        <AwesomeButton
          progress
          type="primary"
          onPress={next => {
            onOrder();
            next();
          }}
          textSize={22}
          textLineHeight={27}
          backgroundColor={'#E0D5C3'}
          borderRadius={30}
          stretch
        >
          Забронировать
        </AwesomeButton>
      </SheetSection>
    </View>
  );

  const renderMarkers = () => {
    return data.map(marker => (
      <Marker
        key={marker.uid}
        coordinate={{
          latitude: Number(marker.latitude),
          longitude: Number(marker.longitude)
        }}
        onPress={markerCallback}
        title={marker.title}
      />
    ));
  };

  return (
    <Container>
      <Content>
        <MapView
          ref={mapViewRef}
          provider={'google'}
          style={styles.mapStyle}
          showsUserLocation={true}
          showsCompass={false}
          initialRegion={{
            ...location,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          // camera={{
          //   pitch: 1,
          //   heading: 1,
          //   altitude: 1,
          //   zoom: 15
          // }}
        >
          {renderMarkers()}
        </MapView>
        {bottomSheet.show && (
          <BottomSheet
            ref={bottomSheet.ref}
            snapPoints={['100%', '50%', '25%']}
            initialSnap={2}
            renderContent={renderContent}
            renderHeader={renderHeader}
          />
        )}
        {/* <RightControls getCurrentPositionCallback={getLocation} /> */}
      </Content>
    </Container>
  );
};
