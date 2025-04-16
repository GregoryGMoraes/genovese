import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ChocolateProps } from '../flatItemsChocolates/index'
import { router } from 'expo-router'

export default function ProductChocolates({ chocolate }: { chocolate: ChocolateProps }) {

    return (
        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: chocolate.imagem }} />
            </View>

            <View style={styles.containerProduct}>
                <Text style={styles.title}>{chocolate.nome}</Text>
                <Text style={styles.subtitle}>{chocolate.tipo}</Text>
                <Text style={styles.subtitle}>{chocolate.marca}</Text>
                <Text style={styles.subtitle}>Origem: {chocolate.origem}</Text>
                <Text style={styles.price}>R${(chocolate.preco).toFixed(2)}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}
                        onPress={() => router.push({
                            pathname: '/detailsChocolates/[id]',
                            params: {
                                id: chocolate.id,
                                nome: chocolate.nome,
                                tipo: chocolate.tipo,
                                marca: chocolate.marca,
                                origem: chocolate.origem,
                                imagem: chocolate.imagem,
                                descricao: chocolate.descricao,
                                preco: chocolate.preco,

                            }
                        })}
                    >Ver Detalhes</Text>
                </TouchableOpacity>
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

    btn: { 
        width: '95%', 
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