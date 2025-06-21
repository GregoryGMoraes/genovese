import { COLORS } from '@/src/constants/colors';
import { FONT_SIZES } from '@/src/constants/fontSize';
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
<<<<<<< HEAD
                <View style={{ flexDirection: 'row'  , justifyContent: 'center', gap: 20, marginTop: 10 }}>
                    {type && <Text style={styles.subtitle}> <FontAwesome5 name='wine-glass-alt' size={22} /> {type}</Text>}
                    {origin && <Text style={styles.subtitle}> <FontAwesome5 name='globe-americas' size={22} /> {origin}</Text>}
                </View>
                {description && <Text style={styles.description}>Descrição: {description}</Text>}
=======
                {type && <Text style={styles.subtitle}>Tipo: {type}</Text>}
                {origin && <Text style={styles.subtitle}>País/Origem: {origin}</Text>}
                {description && <Text style={styles.description}>{description}</Text>}
>>>>>>> constants
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
<<<<<<< HEAD

=======
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.background,
        padding: 15,
        alignItems: 'center',
    },
>>>>>>> constants
    image: {
        width: '100%',
        height: 500,
        marginBottom: -30,
        overflow: 'hidden',
    },
    infoContainer: {
        width: '100%',
        backgroundColor: COLORS.background,
        padding: 15,
<<<<<<< HEAD
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
=======
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
>>>>>>> constants
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
<<<<<<< HEAD
        fontSize: 18,
        fontWeight: 'semibold',
        gap: 10,
        margin: 15,
        marginLeft: 10,
    },
    description: {
        fontSize: 18,
=======
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
>>>>>>> constants
        marginTop: 10,
        marginBottom: 10,
        lineHeight: 20,
        paddingHorizontal: 20,
    },
    price: {
<<<<<<< HEAD
        fontSize: 22,
        fontWeight: 'bold',
=======
        fontSize: FONT_SIZES.price,
        fontWeight: '600',
>>>>>>> constants
        marginTop: 10,
        textAlign: 'center',
    },
});