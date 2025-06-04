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
            <Image style={styles.image} source={{ uri: image }}/>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                <View style={{ flexDirection: 'row'  , justifyContent: 'center', gap: 20, marginTop: 10 }}>
                    {type && <Text style={styles.subtitle}> <FontAwesome5 name='wine-glass-alt' size={22} /> {type}</Text>}
                    {origin && <Text style={styles.subtitle}> <FontAwesome5 name='globe-americas' size={22} /> {origin}</Text>}
                </View>
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

    image: {
        width: '100%',
        height: 500,
        marginBottom: -30,
        overflow: 'hidden',
    },
    infoContainer: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'semibold',
        gap: 10,
        margin: 15,
        marginLeft: 10,
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
        marginTop: 10,
        textAlign: 'center',
    },
});