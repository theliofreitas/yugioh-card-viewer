import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { styles } from './styles';
import { getCards } from '../../services/api';
import SearchInput from '../../components/SearchInput';
import CardList from '../../components/CardList';

import { newSearch, nextPage, updateOffset } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('Dragon');
  const [cardsNotFound, setCardsNotFound] = useState(false);
  const cardListOffset = useSelector(state => state.cardListOffset);
  const dispatch = useDispatch();

  async function listNewSearchResults() {
    const response = await getCards(searchTerm, 0);

    if (response.status === 200) {
      const cardItemsResult = handleSearchResult(response.data);

      if (cardsNotFound) {
        setCardsNotFound(false);
      }

      dispatch(newSearch(cardItemsResult));

      scrollToTop();
    } else {
      handleErrorResult(response);
    }
  }

  async function listNextPageResults() {
    console.log(
      'Call nextPageResults with an offset of: ' + cardListOffset.nextPage,
    );

    const response = await getCards(searchTerm, cardListOffset.nextPage);

    if (response.status === 200) {
      const cardItemsResult = handleSearchResult(response.data);

      dispatch(nextPage(cardItemsResult));
    } else {
      handleErrorResult(response);
    }
  }

  function onSearch(text) {
    setSearchTerm(text);
  }

  function onEndReached() {
    if (!cardListOffset.rowsRemaining) return;

    listNextPageResults();
  }

  function handleSearchResult(response) {
    const meta = response.meta;
    const data = response.data;

    const nextPageOffset = meta.next_page_offset ? meta.next_page_offset : 0;
    const rowsRemaining = meta.rows_remaining;

    const offset = {
      nextPage: nextPageOffset,
      rowsRemaining: rowsRemaining,
    };

    dispatch(updateOffset(offset));

    return data.map(handleCardItemResult);
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

  useEffect(() => {
    listNewSearchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0E0E0E" />

      <SearchInput onPress={onSearch} placeholder="Search for cards..." />

      {!cardsNotFound && (
        <CardList ref={cardListRef} onEndReached={onEndReached} />
      )}

      {cardsNotFound && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>No cards were found... 😕</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
