import React from 'react';
import { ScrollView } from 'react-native';
import { Link } from 'expo-router';

import { Section } from './section';
import { FlatItems } from './flatItems';


export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>

      <Section
        name='Novidades'
      />
      <FlatItems />
 
    </ScrollView>
  );
}
