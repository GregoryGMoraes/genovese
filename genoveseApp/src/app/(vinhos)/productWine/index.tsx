import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ProdutoProps } from '../flatItemsWine/index'
import { router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';
import { useCart } from '../../../context/carrinhoContext';
<<<<<<< HEAD


=======
import { COLORS } from '@/src/constants/colors';
import { FONT_SIZES } from '@/src/constants/fontSize';



>>>>>>> constants
export default function ProductWine({ wine }: { wine: ProdutoProps }) {
    const { addToCart } = useCart();
    const [icon, setIcon] = useState('cart-plus');

    const handleAddToCart = () => {
        const item = {
            id: wine.id,
            name: wine.name,
            image: wine.image,
            brand: wine.brand,
            price: wine.price,
            quant: 1,
        };

        addToCart(item);
        setIcon('check');

        setTimeout(() => {
            setIcon('cart-plus')
        }, 500);
        console.log('Item adicionado ao carrinho:', item);
    };

    return (
        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: wine.image }} />
            </View>
            <View style={styles.containerProduct}>
                <Text style={styles.title}>{wine.name}</Text>
                <Text style={styles.subtitle}>{wine.type}</Text>
                <Text style={styles.subtitle}>{wine.brand}</Text>
                <Text style={styles.subtitle}>Origem: {wine.origin}</Text>
                <Text style={styles.price}>R${(wine.price).toFixed(2)}</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnDetails}>
                        <Text style={styles.textBtn}
                            onPress={() => router.push({
                                pathname: '/wineDetails/[id]',
                                params: {
                                    id: wine.id,
                                    name: wine.name,
                                    type: wine.type,
                                    brand: wine.brand,
                                    description: wine.description,
                                    image: wine.image,
                                    origin: wine.origin,
                                    price: wine.price,

                                }
                            })}
                        >Detalhes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleAddToCart}
                        style={styles.btnAddCart}>
                        <Text style={styles.textBtn}>
                            <FontAwesome5 name={icon} size={18} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.background,
        borderRadius: 10,
<<<<<<< HEAD
        shadowColor: '#000',
=======
        padding: 10,
        shadowColor: COLORS.shadow,
>>>>>>> constants
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 10,
        overflow: 'hidden',
    },
    containerImage: {
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    containerProduct: {
        flex: 1.6,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    title: {
<<<<<<< HEAD
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
=======
        textAlign: 'center',
        fontSize: FONT_SIZES.title,
        fontWeight: '600',
>>>>>>> constants
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: FONT_SIZES.subtitle,
        fontWeight: '600',
        color: COLORS.subtitle,
        marginBottom: 5,
    },
    price: {
<<<<<<< HEAD
        fontSize: 18,
        fontWeight: 'bold',
=======
        fontSize: FONT_SIZES.price,
        fontWeight: '700',
>>>>>>> constants
        marginTop: 10,
    },

    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 10,
        padding: 5
    },

    btnDetails: {
        width: '70%',
        height: 40,
<<<<<<< HEAD
        backgroundColor: "#560022",
=======
        margin: 5,
        backgroundColor: COLORS.primary,
>>>>>>> constants
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10
    },

    btnAddCart: {
        width: '30%',
        height: 40,
<<<<<<< HEAD
        backgroundColor: "#560022",
=======
        margin: 5,
        backgroundColor: COLORS.primary,
>>>>>>> constants
        alignItems: 'center',
        borderRadius: 10
    },

    textBtn: {
        color: COLORS.secondary,
        fontWeight: '500',
        fontSize: FONT_SIZES.button,
        padding: 8,
    }

});