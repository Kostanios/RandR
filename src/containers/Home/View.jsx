import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, FlatList, View, SafeAreaView } from 'react-native';
import { Container } from 'native-base';
import commonStyles from '../commonStyles';
import { ScreenWidth } from '@freakycoder/react-native-helpers';

import SearchBar from 'react-native-dynamic-search-bar';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from 'react-native-cards';

const Block = ({ data, filterData, selectItem, restore, explore }) => {
  const renderCard = useCallback(item => (
    <Card style={{ marginBottom: 10 }}>
      <CardImage
        source={{
          uri:
            'https://ms1.relax.by/images/91653eb43587a0a863ebd226e8ca9edc/resize/point=middle-center,h=240,q=80/place_gallery_photo/9b/3e/67/9b3e67980ce1dc7f0061eb9581c1aa2f.jpg'
        }}
        title={item.address}
        rating={Number(item.average_rating)}
      />
      <CardTitle
        title={item.title}
        subtitle={item.short_description}
        rating={Number(item.average_rating)}
      />
      {item.selected ? (
        <CardContent text={item.full_description} />
      ) : (
        <CardContent />
      )}
      <CardAction separator={true} inColumn={false}>
        <CardButton
          onPress={() => selectItem(item.uid)}
          title="Show more"
          color="#3A2960"
        />
        <CardButton
          onPress={() => explore(item.uid)}
          title="Explore"
          color="#3A2960"
        />
      </CardAction>
    </Card>
  ));

  return (
    <div>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={commonStyles.sceneWrapper} style={{ marginTop: 0 }}>
        <FlatList
          ListHeaderComponent={
            <View style={{ marginBottom: 10 }}>
              <SearchBar
                width={ScreenWidth * 0.98}
                padding
                autoFocus={false}
                onChangeText={text => filterData(text)}
                onPressCancel={() => restore(true)}
                onPress={() => {}}
              />
            </View>
          }
          data={data}
          renderItem={({ item }) => renderCard(item)}
          keyExtractor={item => item.uid.toString()}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </div>
  );
};

Block.prototype = {
  data: PropTypes.array.isRequired,
  filterData: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  restore: PropTypes.func.isRequired
};

export default Block;
