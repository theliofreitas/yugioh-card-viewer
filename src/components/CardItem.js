import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ShadowView from 'react-native-simple-shadow-view';

const CardItem = ({id, name, atk, def, level, race, attribute, image}) => {
  return (
    <ShadowView style={styles.cardShadow}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.cardImage}
            source={{
              uri: image,
              width: 61,
              height: 86,
            }}
          />
        </View>

        <View style={styles.cardInfoWrapper}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardName} numberOfLines={1}>
              {name}
            </Text>
            {level && <Text style={styles.cardLevel}>Lv. {level}</Text>}
          </View>

          <View style={styles.cardAttributes}>
            {attribute && <Text style={styles.cardElement}>{attribute}</Text>}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 110,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
  },
  cardShadow: {
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowColor: 'rgba(183, 183, 183, 0.10)',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  imageWrapper: {
    justifyContent: 'center',
    paddingRight: 10,
  },
  cardInfoWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardAttributes: {
    flexDirection: 'row',
  },
  cardFooter: {
    flexDirection: 'row',
  },
  cardName: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 18,
    color: '#454545',
    flex: 1,
  },
  cardLevel: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    color: '#454545',
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: '#FCC65D',
    borderRadius: 9,
    marginLeft: 4,
  },
  cardElement: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    color: '#FDFF9B',
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: '#454545',
    borderRadius: 4,
    marginRight: 15,
  },
  cardRace: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    color: '#454545',
    paddingVertical: 3,
  },
  cardAtkDef: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    color: '#454545',
    marginRight: 15,
  },
});

export default CardItem;
