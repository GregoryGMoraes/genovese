import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DistilledProps } from '../flatItemsDistilled/index'
import { router } from 'expo-router'
import { useCart } from '../../(carrinho)/context/carrinhoContext';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ProductDistilled({ distilled }: { distilled: DistilledProps }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const item = {
            id: distilled.id,
            name: distilled.name,
            image: distilled.image,
            brand: distilled.brand,
            price: distilled.price,
            quant: 1,
        };
        addToCart(item);
        <Text style={{ color: 'green' }}>Item adicionado ao carrinho!'</Text>
        console.log('Item adicionado ao carrinho:', item);
    };
    return (
        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: distilled.image }} />
            </View>

            <View style={styles.containerProduct}>
                <Text style={styles.title}>{distilled.name}</Text>
                <Text style={styles.subtitle}>{distilled.type}</Text>
                <Text style={styles.subtitle}>{distilled.brand}</Text>
                <Text style={styles.subtitle}>Origem: {distilled.origin}</Text>
                <Text style={styles.price}>R${(distilled.price).toFixed(2)}</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnDetails}>
                        <Text style={styles.textBtn}
                            onPress={() => router.push({
                                pathname: '/distilledDetails/[id]',
                                params: {
                                    id: distilled.id,
                                    name: distilled.name,
                                    type: distilled.type,
                                    brand: distilled.brand,
                                    origin: distilled.origin,
                                    image: distilled.image,
                                    description: distilled.description,
                                    price: distilled.price,

                                }
                            })}
                        >Detalhes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAddCart}>
                        <Text style={styles.textBtn} onPress={handleAddToCart} ><FontAwesome5 name='cart-plus' size={20} /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 10,
    },

    containerImage: {
        flex: 1
    },

    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'contain'
    },

    containerProduct: {
        gap: 2,
        marginLeft: 5,
        flex: 2,
        alignItems: 'center'
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
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#560022',
        marginTop: 10,
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        padding: 10
    },

    btnDetails: {
        width: '70%',
        height: 40,
        margin: 5,
        backgroundColor: "#560022",
        alignItems: 'center',
        borderRadius: 10
    },

    btnAddCart: {
        width: '30%',
        height: 40,
        margin: 5,
        backgroundColor: "#560022",
        alignItems: 'center',
        borderRadius: 10
    },

    textBtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        alignItems: 'center',
        padding: 10
    }

});