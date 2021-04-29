import React from 'react';
import { View, Image, ImageBackground, StyleSheet } from 'react-native';

const LazyImage = ({ smallSource, source, aspectRatio }) => {
  return (
    <ImageBackground
      style={styles.image}
      source={smallSource}
      resizeMode="contain"
      blurRadius={2}>
      <Image style={styles.image} source={source} resizeMode="contain" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default LazyImage;
