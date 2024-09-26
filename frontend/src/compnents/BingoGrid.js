import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BingoGrid = () => {
  return (
    <View style={styles.grid}>
      <Text>Bingo Grid</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    padding: 20,
  },
});

export default BingoGrid;