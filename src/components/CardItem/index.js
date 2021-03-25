import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ShadowView from 'react-native-simple-shadow-view';

import { styles } from './styles';
import { cardAttributeColors } from '../../styles/colors';

const CardItem = ({ id, name, atk, def, level, race, attribute, image }) => {
  return (
    <ShadowView style={styles.cardShadow}>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.cardImage}
          source={{
            uri: image,
            width: 61,
            height: 86,
          }}
        />

        <View style={styles.cardInfoWrapper}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardName} numberOfLines={1}>
              {name}
            </Text>
            {level && <Text style={styles.cardLevel}>Lv. {level}</Text>}
          </View>

          <View style={styles.cardProperties}>
            {attribute && (
              <Text
                style={[
                  styles.cardAttribute,
                  { color: cardAttributeColors[attribute] },
                ]}>
                {attribute}
              </Text>
            )}
            <Text style={styles.cardRace}>{race}</Text>
          </View>

          <View style={styles.cardFooter}>
            {atk !== undefined && (
              <Text style={styles.cardAtkDef}>ATK: {atk}</Text>
            )}
            {def !== undefined && (
              <Text style={styles.cardAtkDef}>DEF: {def}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </ShadowView>
  );
};

export default CardItem;
