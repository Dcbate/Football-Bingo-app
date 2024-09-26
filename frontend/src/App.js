import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BingoGrid from './components/BingoGrid';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dave's Football Bingo</Text>
      <BingoGrid />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;