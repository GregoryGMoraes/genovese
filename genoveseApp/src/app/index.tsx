import React from 'react';
import { View, StyleSheet } from 'react-native';

import Home from './(home)/index'
import { COLORS } from '../constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 10,
  },

});