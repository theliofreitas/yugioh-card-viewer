import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  cardShadow: {
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowColor: 'rgba(183, 183, 183, 0.10)',
    backgroundColor: colors.backgroundLight,
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 110,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 8,
  },
  cardImage: {
    justifyContent: 'center',
    marginRight: 10,
  },
  cardInfoWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardName: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 18,
    color: colors.textPrimary,
    flex: 1,
  },
  cardLevel: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    color: colors.textPrimary,
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: '#FCC65D',
    borderRadius: 9,
    marginLeft: 4,
  },
  cardProperties: {
    flexDirection: 'row',
  },
  cardAttribute: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: colors.textPrimary,
    borderRadius: 4,
    marginRight: 15,
  },
  cardRace: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    color: colors.textPrimary,
    paddingVertical: 3,
  },
  cardFooter: {
    flexDirection: 'row',
  },
  cardAtkDef: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    color: colors.textPrimary,
    marginRight: 15,
  },
});
