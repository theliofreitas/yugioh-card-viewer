import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CardItem = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.cardImage}
            source={{
              // eslint-disable-next-line prettier/prettier
              uri: 'https://storage.googleapis.com/ygoprodeck.com/pics/10000020.jpg',
              width: 61,
              height: 86,
            }}
          />
        </View>

        <View style={styles.cardInfoWrapper}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardName}>Slifer the Sky Dragon</Text>
            <Text style={styles.cardLevel}>Lv. 10</Text>
          </View>

          <View style={styles.cardAttributes}>
            <Text style={styles.cardElement}>Divine</Text>
            <Text style={styles.cardRace}>Dragon</Text>
          </View>

          <View style={styles.cardFooter}>
            <Text style={styles.cardAtkDef}>ATK: 3000</Text>
            <Text style={styles.cardAtkDef}>DEF: 2500</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
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
  },
  cardLevel: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    color: '#454545',
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: '#FCC65D',
    borderRadius: 9,
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
    paddingHorizontal: 5,
  },
  cardAtkDef: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    color: '#454545',
    marginRight: 15,
  },
});

export default CardItem;
