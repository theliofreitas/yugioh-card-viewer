import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import CardItem from '../CardItem';

const CardList = ({ onEndReached }, ref) => {
  const cardItems = useSelector(state => state.cardList);

  const ITEM_HEIGHT = 126;

  const renderItem = ({ item }) => {
    return (
      <CardItem
        id={item.id}
        name={item.name}
        atk={item.atk}
        def={item.def}
        level={item.level}
        race={item.race}
        attribute={item.attribute}
        image={item.image}
      />
    );
  };

  const _getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index: index,
    };
  };

  return (
    <FlatList
      ref={ref}
      data={cardItems}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0}
      onEndReached={onEndReached}
      getItemLayout={_getItemLayout}
      maxToRenderPerBatch={12}
      initialNumToRender={12}
      removeClippedSubviews={true}
    />
  );
};

export default React.forwardRef(CardList);
