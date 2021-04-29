import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';
import { getCardDetails } from '../../services/api';
import CardImages from '../../components/CardImages';
import LazyImage from '../../components/LazyImage';

const CardDetailsScreen = ({ route }) => {
  const { cardName } = route.params;
  const [cardImages, setCardImages] = useState([]);
  const [cardActive, setCardActive] = useState({});

  async function requestCardDetails() {
    const response = await getCardDetails(cardName);

    if (response.status === 200) {
      const cardImagesResult = handleSearchResult(response.data);
      setCardImages(cardImagesResult);
      setCardActive(cardImagesResult[0]);
    } else {
      handleErrorResult(response);
    }
  }

  function handleSearchResult(response) {
    const data = response.data[0].card_images;
    data[0].active = true;

    return data;
  }

  function handleErrorResult(error) {
    // TODO
    console.log(error.data);
  }

  function chooseCard(index) {
    let cardImagesCopy = [...cardImages];

    cardImagesCopy.map(cardCopy => {
      cardCopy.active = false;
      return cardCopy;
    });

    cardImagesCopy[index].active = true;

    setCardImages(cardImagesCopy);
    setCardActive(cardImages[index]);
  }

  useEffect(() => {
    requestCardDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.activeImageContainer}>
        <LazyImage
          smallSource={{ uri: cardActive.image_url_small }}
          source={{ uri: cardActive.image_url }}
        />
      </View>

      <View style={styles.cardImagesContainer}>
        <Text style={styles.textLabel}>Card images</Text>
        <CardImages cardImagesList={cardImages} onPress={chooseCard} />
      </View>
    </SafeAreaView>
  );
};

export default CardDetailsScreen;
