import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ShadowView from 'react-native-simple-shadow-view';

import { styles } from './styles';

const SearchInput = ({ placeholder, onPress }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <ShadowView style={styles.inputShadow}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputSearch}
          value={searchInput}
          onChangeText={search => setSearchInput(search)}
          onSubmitEditing={() => onPress(searchInput)}
          placeholder={placeholder}
        />
        <TouchableOpacity onPress={() => onPress(searchInput)}>
          <Icon
            style={styles.iconSearch}
            name="search1"
            size={18}
            color="#7C7C7C"
          />
        </TouchableOpacity>
      </View>
    </ShadowView>
  );
};

export default SearchInput;
