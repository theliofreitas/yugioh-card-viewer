import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { styles } from './styles';
import { getCards } from '../../services/api';
import SearchInput from '../../components/SearchInput';
import CardList from '../../components/CardList';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('Dark Magician');
  const [cardItems, setCardItems] = useState([]);
  const [nextPageOffset, setNextPageOffset] = useState(0);
  const [rowsRemaining, setRowsRemaining] = useState();
  const [cardsNotFound, setCardsNotFound] = useState(false);

  async function listNewSearchResults() {
    const response = await getCards(searchTerm, nextPageOffset);

    if (response.status === 200) {
      const cardItemsResult = handleSearchResult(response.data);
      setCardsNotFound(false);
      setCardItems(cardItemsResult);
      scrollToTop();
    } else {
      handleErrorResult(response);
    }
  }

  async function listNextPageResults() {
    const response = await getCards(searchTerm, nextPageOffset);

    if (response.status === 200) {
      const cardItemsResult = handleSearchResult(response.data);
      setCardItems([...cardItems, ...cardItemsResult]);
    } else {
      handleErrorResult(response);
    }
  }

  function onSearch(text) {
    setNextPageOffset(0);
    setSearchTerm(text);
  }

  function onEndReached() {
    // console.log('End reached');

    if (!rowsRemaining) return;

    listNextPageResults();
  }

  function handleSearchResult(response) {
    const meta = response.meta;
    const data = response.data;

    meta.next_page_offset
      ? setNextPageOffset(meta.next_page_offset)
      : setNextPageOffset(0);

    setRowsRemaining(meta.rows_remaining);

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
    setCardItems([]);
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

  console.log('Rendering...');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0E0E0E" />

      <SearchInput onPress={onSearch} placeholder="Search for cards..." />

      {!cardsNotFound && (
        <CardList
          ref={cardListRef}
          cardItems={cardItems}
          onEndReached={onEndReached}
        />
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
