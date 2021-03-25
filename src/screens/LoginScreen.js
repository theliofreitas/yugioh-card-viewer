import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ButtonLogin from '../components/ButtonLogin';
import SplashImage from '../assets/img/splash-screen.jpg';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0E0E0E" />

      <ImageBackground style={styles.backgroundImage} source={SplashImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Yu-Gi-Oh!</Text>
          <Text style={styles.subtitle}>card viewer</Text>
        </View>
      </ImageBackground>

      <View style={styles.buttonsSection}>
        <ButtonLogin title="Sign in with Google" color="#C5C5C5" disabled />
        <ButtonLogin title="Sign in with Email" color="#C5C5C5" disabled />
        <ButtonLogin
          title="Continue as Guest"
          color="#5BD8FF"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 3,
    justifyContent: 'center',
    maxHeight: 660,
  },
  overlay: {
    flex: 3,
    width: '100%',
    maxHeight: 660,
    backgroundColor: 'rgba(19, 0, 139, 0.44)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 48,
    color: '#FFCE4F',
    textShadowColor: '#CF8630',
    textShadowOffset: { width: 5, height: 6 },
    textShadowRadius: 30,
  },
  subtitle: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 16,
    color: '#FFF',
    marginBottom: 50,
  },
  buttonsSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // justifyContent: 'flex-end',
    paddingVertical: 20,
  },
});

export default LoginScreen;
