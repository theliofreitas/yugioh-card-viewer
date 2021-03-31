import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';

import { styles } from './styles';

const CardImages = ({ cardImagesList, onPress, handler }) => {
  return (
    <View style={styles.imagesContainer}>
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
    </View>
  );
};

export default CardImages;
