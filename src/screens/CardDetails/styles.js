import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'space-between',
  },
  activeImageContainer: {
    height: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardImagesContainer: {
    // justifyContent: 'flex-end',
    marginTop: 20,
  },
  textLabel: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 18,
    color: colors.textPrimary,
  },
});
