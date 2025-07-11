import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ProductProps } from '../flatItemsWine/index'
import { router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';
import { useCart } from '../../../context/carrinhoContext';
import { COLORS } from '@/src/constants/colors';
import { FONT_SIZES } from '@/src/constants/fontSize';

export default React.memo(function ProductWine({ wine }: { wine: ProductProps }) {
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
});


const styles = StyleSheet.create({
    container: {
           flexDirection: 'row',
           backgroundColor: COLORS.background,
           borderRadius: 10,
           padding: 10,
           shadowColor: COLORS.shadow,
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
           fontSize: FONT_SIZES.title,
           fontWeight: 'bold',
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
           fontSize: FONT_SIZES.price,
           fontWeight: 'bold',
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
           backgroundColor: COLORS.primary,
           alignItems: 'center',
           borderRadius: 10
       },
   
       btnAddCart: {
           width: '30%',
           height: 40,
           margin: 5,
           backgroundColor: COLORS.primary,
           alignItems: 'center',
           borderRadius: 10
       },
   
       btn: {
           width: '70%',
           height: 40,
           margin: 5,
           backgroundColor: COLORS.primary,
           alignItems: 'center',
           borderRadius: 10,
           justifyContent: 'center'
       },
   
       textBtn: {
           color: COLORS.secondary,
           fontWeight: 'bold',
           fontSize: 18,
           alignItems: 'center',
           padding: 10
       }
   
});