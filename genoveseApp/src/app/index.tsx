import React from 'react';
import { ScrollView, Text, Image, View, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App() {
  return (

    <ScrollView style={styles.container}>

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.jpg")}
        />
      </View>
      <View style={styles.categoriesContainer}>
        <Pressable style={styles.category} onPress={() => router.push('/flatItemsVinhos')}>
          <View style={styles.imageContainer}>
            <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1672690025434-a15f3ea587f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
            <Text style={styles.overlayText}>Vinhos</Text>
          </View>
        </Pressable>

        <Pressable style={styles.category} onPress={() => router.push('/flatItemsPescados')}>
          <View style={styles.imageContainer}>
            <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVmZWklQzMlQTclQzMlQTNvfGVufDB8fDB8fHww" }} />
            <Text style={styles.overlayText}>Pescados</Text>
          </View>
        </Pressable>

        <Pressable style={styles.category} onPress={() => router.push('/flatItemsChocolates')}>

          <View style={styles.imageContainer}>
            <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1542843137-8791a6904d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNob2NvbGF0ZXN8ZW58MHx8MHx8fDA%3D" }} />
            <Text style={styles.overlayText}>Chocolates</Text>
          </View>
        </Pressable>

        <Pressable style={styles.category} onPress={() => router.push('/flatItemsQueijos')}>
          <View style={styles.imageContainer}>
            <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVlaWpvc3xlbnwwfHwwfHx8MA%3D%3D" }} />
            <Text style={styles.overlayText}>
              Queijos</Text>
          </View>
        </Pressable>

        <Pressable style={styles.category} onPress={() => router.push('/flatItemsDestilados')}>
          <View style={styles.imageContainer}>
            <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1609330578888-d7d34c3f8718?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
            <Text style={styles.overlayText}>Destilados</Text>
          </View>
        </Pressable>
      </View>

    </ScrollView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  categoriesContainer: {
    gap: 15,
  },
  category: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  imageContainer: {
    position: 'relative',
  },

  overlayText: {
    position: 'absolute',
    color: '#560022',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    height: 30,
    width: 100,
    alignItems: 'center',
    borderBottomRightRadius: 10,
    paddingTop: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
});