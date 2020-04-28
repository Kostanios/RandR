import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from 'native-base';
import AwesomeButton from 'react-native-really-awesome-button';
import * as routeNames from '@utils/constants/routeNames';

import Styles from './styles';

export default ({ navigation }) => {
  return (
    <Container style={Styles.wrapper}>
      <StatusBar barStyle={'dark-content'} />
      <AwesomeButton
        progress
        type="primary"
        onPress={next => {
          navigation.navigate(routeNames.SEARCH);
          next();
        }}
        textSize={22}
        textLineHeight={27}
        backgroundColor={'#E0D5C3'}
        borderRadius={30}
        stretch
        style={{ marginTop: 30 }}
      >
        Вернуться назад
      </AwesomeButton>
    </Container>
  );
};
