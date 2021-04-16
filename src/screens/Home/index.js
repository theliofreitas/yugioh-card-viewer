import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { styles } from './styles';
import SearchInput from '../../components/SearchInput';
import CardList from '../../components/CardList';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('Dragon');

  function onSearch(text) {
    setSearchTerm(text);
  }

  console.log('Rendering home');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0E0E0E" />

      <SearchInput onPress={onSearch} placeholder="Search for cards..." />

      <CardList searchTerm={searchTerm} />
    </SafeAreaView>
  );
};

export default HomeScreen;
