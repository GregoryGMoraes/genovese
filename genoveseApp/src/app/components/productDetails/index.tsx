import { COLORS } from '@/src/constants/colors';
import { FONT_SIZES } from '@/src/constants/fontSize';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FlagCountry } from '../flagCountry';

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
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                {type && <Text style={styles.subtitle}>Tipo: {type}</Text>}
                <View style={styles.flagRow}>
                    <FlagCountry country={origin ?? ''} size={30} />
                    <Text style={styles.countryName}>{origin}</Text>
                </View>
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
        height: 500,
        marginBottom: -30,
        resizeMode: 'contain',
    },
    infoContainer: {
        width: '100%',
        backgroundColor: COLORS.background,
        padding: 15,
    },

    flagRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        marginLeft: 10,
    },

    countryName: {
        fontSize: FONT_SIZES.title,
        fontWeight: '600',
        marginLeft: 10,
    },

    title: {
        fontSize: FONT_SIZES.title,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 'semibold',
        gap: 10,
        margin: 15,
        marginLeft: 10,
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