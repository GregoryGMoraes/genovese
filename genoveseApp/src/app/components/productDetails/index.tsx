import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

interface ProductDetailsProps {
    name: string;
    type?: string;
    origin?: string;
    image: string;
    description?: string;
    price: number;
}

export default function ProductDetails({
    name,
    type,
    origin,
    image,
    description,
    price,
}: ProductDetailsProps) {
    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                {type && <Text style={styles.subtitle}> <FontAwesome5 name='wine-glass-alt' size={22}/> {type}</Text>}
                {origin && <Text style={styles.subtitle}> <FontAwesome5 name='globe-americas' size={22}/> {origin}</Text>}
                {description && <Text style={styles.description}>Descrição: {description}</Text>}
                <Text style={styles.price}>R${price.toFixed(2)}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
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
        fontSize: 18,
        fontWeight: '600',
        gap: 10,
        margin: 5,
    },
    description: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        lineHeight: 20,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#560022',
        marginTop: 10,
    },
});