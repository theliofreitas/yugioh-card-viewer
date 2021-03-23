import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ShadowView from 'react-native-simple-shadow-view';

import api from '../services/api';

import CardItem from '../components/CardItem';

const HomeScreen = () => {
  const [cardItems, setCardItems] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('Six Samurai');

  const flatListRef = useRef();

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

  function handleSearch() {
    setSearchTerm(searchInput);
  }

  function handleEndReached() {
    console.log('End reached');
    // ... Load more card items
  }

  useEffect(() => {
    api
      .get('/cardinfo.php', {
        params: {
          fname: searchTerm,
          num: 18,
          offset: 0,
        },
      })
      .then(function (response) {
        const result = response.data;
        const data = result.data;
        const meta = result.meta;

        const cardItemsResult = data.map(handleCardItemResult);

        setCardItems(cardItemsResult);

        // Scroll to top
        flatListRef.current.scrollToOffset({
          animated: true,
          offset: 0,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [searchTerm]);

  const renderItem = ({item}) => (
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0E0E0E" />

      <ShadowView style={styles.inputShadow}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputSearch}
            value={searchInput}
            onChangeText={search => setSearchInput(search)}
            onSubmitEditing={handleSearch}
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
        onEndReachedThreshold={0.1}
        onEndReached={handleEndReached}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  inputShadow: {
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowColor: 'rgba(128, 128, 128, 0.25)',
    backgroundColor: 'rgba(128, 128, 128, 0.25)',
    borderRadius: 28,
    shadowOffset: {width: 3, height: 3},
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 28,
  },
  inputSearch: {
    backgroundColor: '#FFF',
    fontFamily: 'SquadaOne-Regular',
    fontSize: 17,
    color: '#7C7C7C',
    height: 45,
    paddingLeft: 15,
    borderRadius: 28,
    flex: 1,
  },
  iconSearch: {
    padding: 10,
    marginRight: 10,
  },
});

export default HomeScreen;
