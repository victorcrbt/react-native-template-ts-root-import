import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import RootImport from '~/components/RootImport';

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Hello, React Native!</Text>

      <RootImport />
    </SafeAreaView>
  );
};

export default Home;
