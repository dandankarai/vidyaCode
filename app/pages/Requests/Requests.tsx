import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchInput from '../../components/SearchInput/SearchInput';
import {Container} from './style';

function Requests(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const SeachIcon = <Icon name="search" size={30} color="#900" />;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Container>
        <SearchInput />
      </Container>
    </SafeAreaView>
  );
}

export default Requests;
