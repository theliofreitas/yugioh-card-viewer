import React from 'react';
import { Image, ScrollView, TouchableHighlight } from 'react-native';

import { styles } from './styles';

const CardImages = ({ cardImagesList, onPress }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'flex-end',
      }}
      style={styles.imagesContainer}>
      {cardImagesList.map((card, index) => {
        return (
          <TouchableHighlight
            key={card.id}
            style={styles.activeImage(card.active)}
            onPress={() => onPress(index)}>
            <Image
              source={{
                uri: card.image_url_small,
                width: '100%',
                height: '100%',
              }}
            />
          </TouchableHighlight>
        );
      })}
    </ScrollView>
  );
};

export default CardImages;
