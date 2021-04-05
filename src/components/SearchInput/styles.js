import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputShadow: {
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowColor: 'rgba(128, 128, 128, 0.25)',
    backgroundColor: 'rgba(128, 128, 128, 0.25)',
    borderRadius: 28,
    shadowOffset: { width: 3, height: 3 },
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
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
