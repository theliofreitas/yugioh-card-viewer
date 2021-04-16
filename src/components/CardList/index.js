import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { getCards } from '../../services/api';
import { newSearch, nextPage } from '../../actions';
import CardItem from '../CardItem';

const CardList = ({ searchTerm }) => {
  const [cardsNotFound, setCardsNotFound] = useState(false);
  const { data: cardItems, offset } = useSelector(state => state.cardList);
  const dispatch = useDispatch();

  async function loadCards(shouldRefresh) {
    if (!shouldRefresh && !offset.rowsRemaining) return;

    const response = await getCards(
      searchTerm,
      shouldRefresh ? 0 : offset.nextPage,
    );

    if (response.status === 200) {
      const cardItemsResult = handleSearchResult(response.data);

      if (cardsNotFound) {
        setCardsNotFound(false);
      }

      if (shouldRefresh) {
        scrollToTop();
        dispatch(newSearch(cardItemsResult));
      } else {
        dispatch(nextPage(cardItemsResult));
      }
    } else {
      handleErrorResult(response);
    }
  }

  function handleSearchResult(response) {
    const meta = response.meta;
    const data = response.data;

    const nextPageOffset = meta.next_page_offset ? meta.next_page_offset : 0;
    const rowsRemaining = meta.rows_remaining;

    const offsetData = {
      nextPage: nextPageOffset,
      rowsRemaining: rowsRemaining,
    };

    const cardData = data.map(handleCardItemResult);

    return { data: cardData, offset: offsetData };
  }

  function handleCardItemResult(cardItem) {
    const newCardItem = {
      id: cardItem.id,
      name: cardItem.name,
      atk: cardItem.atk,
      def: cardItem.def,
      level: cardItem.level,
      race: cardItem.race,
      attribute: cardItem.attribute,
      image: cardItem.card_images[0].image_url_small,
    };

    return newCardItem;
  }

  function handleErrorResult(error) {
    setCardsNotFound(true);
    console.log(error.data);
  }

  const cardListRef = useRef();
  function scrollToTop() {
    if (cardListRef.current !== undefined) {
      cardListRef.current.scrollToOffset({
        animated: true,
        offset: 0,
      });
    }
  }

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
      {!cardsNotFound && (
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
          getItemLayout={_getItemLayout}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          removeClippedSubviews={true}
        />
      )}

      {cardsNotFound && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>No cards were found... 😕</Text>
        </View>
      )}
    </Fragment>
  );
};

export default CardList;
