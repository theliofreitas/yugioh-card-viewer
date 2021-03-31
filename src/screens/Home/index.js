import React, { useState, useEffect, useRef } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ShadowView from 'react-native-simple-shadow-view';

import { styles } from './styles';
import { getCards } from '../../services/api';
import CardItem from '../../components/CardItem';

const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('Six Samurai');
  const [cardItems, setCardItems] = useState([]);
  const [nextPageOffset, setNextPageOffset] = useState(0);
  const [rowsRemaining, setRowsRemaining] = useState();

  async function listNewSearchResults() {
    const response = await getCards(searchTerm, nextPageOffset);

    if (response.status === 200) {
      const cardItemsResult = handleSearchResult(response.data);
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

  function onSearch() {
    setNextPageOffset(0);
    setSearchTerm(searchInput);
  }

  function onEndReached() {
    console.log('End reached');

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
    // TODO
    console.log(error.data);
  }

  function scrollToTop() {
    flatListRef.current.scrollToOffset({
      animated: true,
      offset: 0,
    });
  }

  useEffect(() => {
    listNewSearchResults();
  }, [searchTerm]);

  const renderItem = ({ item }) => (
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

  const flatListRef = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0E0E0E" />

      <ShadowView style={styles.inputShadow}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputSearch}
            value={searchInput}
            onChangeText={search => setSearchInput(search)}
            onSubmitEditing={onSearch}
            placeholder="Search for cards..."
          />
          <TouchableOpacity>
            <Icon
              style={styles.iconSearch}
              name="search1"
              size={18}
              color="#7C7C7C"
            />
          </TouchableOpacity>
        </View>
      </ShadowView>

      <FlatList
        ref={flatListRef}
        data={cardItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.3}
        onEndReached={onEndReached}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
