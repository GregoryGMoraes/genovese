import React from 'react';
import { ScrollView, Image, View, Pressable } from 'react-native';
import { router } from 'expo-router';

import Section from './section';


export default function App() {
  return (

    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={require("../../assets/images/logo.jpg")}
        />
      </View>

      <Pressable onPress={() => router.push('/flatItemsVinhos')}>
        <Section
          name='Vinhos'
        />
        <Image style={{ width: '95%', height: 150, marginLeft: 5, marginTop: 10, borderRadius: 10 }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVUkG2eR22Q4HyuMhCcjg_qJdm2WziUxHNg&s" }} />
      </Pressable>

      <Pressable onPress={() => router.push('/flatItemsPescados')}>
        <Section
          name='Pescados'
        />
        <Image style={{ width: '95%', height: 150, marginLeft: 5, marginTop: 10, borderRadius: 10 }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7-d8m1K6Cb6OZtYkOEigZB_FUYZ9AyC2zw&s" }} />
      </Pressable>

      <Pressable onPress={() => router.push('/flatItemsChocolates')}>
        <Section
          name='Chocolates'
        />
        <Image style={{ width: '95%', height: 150, marginLeft: 5, marginTop: 10, borderRadius: 10 }} source={{ uri: "https://media-master.shop.lindt.com.br/revslider/Chocolates_Sortidos_Banner_Desk_1920_x_550.png" }} />
      </Pressable>


    </ScrollView>
  );
}
