import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import CardItem from '../components/CardItem';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#0E0E0E" />

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Search for cards..."
        />
        <TouchableOpacity>
          <Icon
            style={styles.iconSearch}
            name="search1"
            size={18}
            color="#7C7C7C"
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  inputShadow: {
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowColor: 'rgba(128, 128, 128, 0.25)',
    backgroundColor: 'rgba(128, 128, 128, 0.25)',
    borderRadius: 28,
    shadowOffset: {width: 3, height: 3},
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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

export default HomeScreen;
