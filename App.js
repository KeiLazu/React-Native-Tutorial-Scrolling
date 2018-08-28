import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScrollviewTutorial from './components/ScrollViewTutorial';
import ViewPagerTutorial from './components/ViewPagerTutorial';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollviewTutorial />
        <ViewPagerTutorial />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
