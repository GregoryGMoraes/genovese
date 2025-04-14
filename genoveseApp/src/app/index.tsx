import React from 'react';
import { ScrollView, Image, View, Pressable } from 'react-native';
import { router } from 'expo-router';

import Section from './section';


export default function App() {
  return (

    <ScrollView style={{ flex: 1, padding: 5, backgroundColor: '#fff' }}>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={require("../../assets/images/logo.jpg")}
        />
      </View>

      <Pressable onPress={() => router.push('/flatItemsVinhos')}>
        <Section
          name='Vinhos'
        />
        <Image style={{ width: '100%', height: 100, marginTop: 10, borderRadius: 10 }} source={{ uri: "https://images.unsplash.com/photo-1672690025434-a15f3ea587f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
      </Pressable>

      <Pressable onPress={() => router.push('/flatItemsPescados')}>
        <Section
          name='Pescados'
        />
        <Image style={{ width: '100%', height: 100, marginTop: 10, borderRadius: 10 }} source={{ uri: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVmZWklQzMlQTclQzMlQTNvfGVufDB8fDB8fHww" }} />
      </Pressable>

      <Pressable onPress={() => router.push('/flatItemsChocolates')}>
        <Section
          name='Chocolates'
        />
        <Image style={{ width: '100%', height: 100, marginTop: 10, borderRadius: 10 }} source={{ uri: "https://images.unsplash.com/photo-1542843137-8791a6904d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNob2NvbGF0ZXN8ZW58MHx8MHx8fDA%3D" }} />
      </Pressable>
     
      <Pressable onPress={() => router.push('/flatItemsQueijos')}>
        <Section
          name='Queijos'
        />
        <Image style={{ width: '100%', height: 100, marginTop: 10, borderRadius: 10 }} source={{ uri: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVlaWpvc3xlbnwwfHwwfHx8MA%3D%3D" }} />
      </Pressable>
      
      <Pressable onPress={() => router.push('/flatItemsDestilados')}>
        <Section
          name='Destilados'
        />
        <Image style={{ width: '100%', height: 100, marginTop: 10, borderRadius: 10 }} source={{ uri: "https://images.unsplash.com/photo-1609330578888-d7d34c3f8718?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
      </Pressable>


    </ScrollView>
  );
}
