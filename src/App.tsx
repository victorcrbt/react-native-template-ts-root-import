import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

import RootImport from '~/components/RootImport';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <Text>Hello, React Native!</Text>

        <RootImport />
      </SafeAreaView>
    </>
  );
};

export default App;
