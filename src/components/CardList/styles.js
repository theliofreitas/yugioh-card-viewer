import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  errorContainer: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontFamily: 'SquadaOne-Regular',
    color: colors.textPrimary,
    fontSize: 22,
  },
  loader: {
    marginVertical: 30,
  },
});
