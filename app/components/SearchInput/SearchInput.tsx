import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {Container, InputContent} from './style';
// import {AntDesign} from '@expo/vector-icons';
// import {Ionicons} from '@expo/vector-icons'; // ou qualquer outra biblioteca de ícones
const SearchInput = ({onSearch}: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Container>
      <View>
        {/* <AntDesign name="search1" size={24} color="black" /> */}
        <InputContent
          placeholder="Digite sua busca..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
      </View>
    </Container>
  );
};

export default SearchInput;
