import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ProductProps } from '../flatItemsCold/index'
import { router } from 'expo-router'
import { useCart } from '../../../context/carrinhoContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '@/src/constants/colors';
import { FONT_SIZES } from '@/src/constants/fontSize';

export default function ProductCold({ cold }: { cold: ProductProps }) {
 const { addToCart } = useCart();

    const handleAddToCart = () => {
        const item = {
            id: cold.id,
            name: cold.name,
            image: cold.image,
            brand: cold.brand,
            price: cold.price,
            quant: 1,
        };
        addToCart(item);
        <Text style={{ color: 'green' }}>Item adicionado ao carrinho!'</Text>
        console.log('Item adicionado ao carrinho:', item);
    };

    return (
        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: cold.image }} />
            </View>

            <View style={styles.containerProduct}>
                <Text style={styles.title}>{cold.name}</Text>
                <Text style={styles.subtitle}>{cold.type}</Text>
                <Text style={styles.subtitle}>{cold.brand}</Text>
                <Text style={styles.subtitle}>Origem: {cold.origin}</Text>
                <Text style={styles.price}>R${(cold.price).toFixed(2)} Kg</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnDetails}>
                        <Text style={styles.textBtn}
                            onPress={() => router.push({
                                pathname: '/coldDetails/[id]',
                                params: {
                                    id: cold.id,
                                    name: cold.name,
                                    type: cold.type,
                                    brand: cold.brand,
                                    description: cold.description,
                                    image: cold.image,
                                    origin: cold.origin,
                                    price: cold.price,

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