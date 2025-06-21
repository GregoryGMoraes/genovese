import { COLORS } from '@/src/constants/colors';
import { FONT_SIZES } from '@/src/constants/fontSize';
import React from 'react';
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
                {type && <Text style={styles.subtitle}>Tipo: {type}</Text>}
                {origin && <Text style={styles.subtitle}>País/Origem: {origin}</Text>}
                {description && <Text style={styles.description}>{description}</Text>}
                <Text style={styles.price}>R${price.toFixed(2)}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.background,
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
        backgroundColor: COLORS.background,
        padding: 15,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: FONT_SIZES.title,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: FONT_SIZES.subtitle,
        fontWeight: '600',
        color: COLORS.subtitle,
        marginBottom: 5,
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        fontSize: FONT_SIZES.description,
        color: COLORS.description,
        marginTop: 10,
        marginBottom: 10,
        lineHeight: 20,
        paddingHorizontal: 20,
    },
    price: {
        fontSize: FONT_SIZES.price,
        fontWeight: '600',
        marginTop: 10,
        textAlign: 'center',
    },
});