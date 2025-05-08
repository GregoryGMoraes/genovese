import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ChocolateDetails() {
    const { id, name, type, brand, image, origin, description, price } = useLocalSearchParams();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
            <Image style={styles.image} source={{ uri: Array.isArray(image) ? image[0] : image }}/>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.title}> {name}</Text>
                <Text style={styles.subtitle}>Tipo: {type}</Text>
                <Text style={styles.subtitle}>Marca: {brand}</Text>
                <Text style={styles.subtitle}>País/Origem: {origin}</Text>
                <Text style={styles.description}>Descrição: {description}</Text>
                <Text style={styles.price}>R${Number(price).toFixed(2)}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 15,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    infoContainer: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#560022',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 10,
        marginBottom: 10,
        lineHeight: 20,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#560022',
        marginTop: 10,
    },
});
