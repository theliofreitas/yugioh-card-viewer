import React, { Fragment, useEffect, useRef } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { getCards } from '../../store/actions/cards';
import CardItem from '../CardItem';

const CardList = ({ searchTerm }) => {
  const {
    data: cardItems,
    offset,
    loadingHeader,
    loadingFooter,
    error,
  } = useSelector(state => state.cards);

  const dispatch = useDispatch();

  function loadCards(shouldRefresh) {
    if (shouldRefresh) {
      dispatch(getCards(searchTerm, 0));
      scrollToTop();
    } else if (offset.rowsRemaining) {
      dispatch(getCards(searchTerm, offset.nextPage));
    }
  }

  const cardListRef = useRef();
  const scrollToTop = () => {
    cardListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const ITEM_HEIGHT = 126;
  const _getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index: index,
    };
  };

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

  useEffect(() => {
    loadCards(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  console.log('Rendering Card List ...');

  return (
    <Fragment>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>No cards were found... 😕</Text>
        </View>
      )}

      <FlatList
        ref={cardListRef}
        data={cardItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          loadCards();
        }}
        ListHeaderComponent={
          loadingHeader && (
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color="#b5b5b5"
            />
          )
        }
        ListFooterComponent={
          loadingFooter && (
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color="#b5b5b5"
            />
          )
        }
        getItemLayout={_getItemLayout}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        removeClippedSubviews={true}
      />
    </Fragment>
  );
};

export default CardList;
