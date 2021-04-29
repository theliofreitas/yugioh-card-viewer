import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imagesContainer: {
    flexDirection: 'row',
  },
  activeImage: active => ({
    width: 85,
    height: 115,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 6,
    margin: 5,
    padding: 2,
    borderColor: active ? '#7ED1FF' : 'white',
    opacity: active ? 1 : 0.5,
  }),
});
