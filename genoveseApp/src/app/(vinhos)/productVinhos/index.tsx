import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { VinhoProps } from '../flatItemsVinhos/index'
import { router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';

export default function ProductVinhos({ vinho }: { vinho: VinhoProps }) {

    return (
        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: vinho.imagem }} />
            </View>

            <View style={styles.containerProduct}>
                <Text style={styles.title}>{vinho.nome}</Text>
                <Text style={styles.subtitle}>{vinho.tipoUva}</Text>
                <Text style={styles.subtitle}>{vinho.marca}</Text>
                <Text style={styles.subtitle}>Origem: {vinho.paisOrigem}</Text>
                <Text style={styles.price}>R${(vinho.preco).toFixed(2)}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', padding: 10 }}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}
                            onPress={() => router.push({
                                pathname: '/detailsVinhos/[id]',
                                params: {
                                    id: vinho.id,
                                    nome: vinho.nome,
                                    tipo: vinho.tipoUva,
                                    marca: vinho.marca,
                                    descricao: vinho.descricao,
                                    imagem: vinho.imagem,
                                    origem: vinho.paisOrigem,
                                    preco: vinho.preco,

                                }
                            })}
                        >Ver Detalhes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '30%', height: 40, margin: 5, backgroundColor: "#560022", alignItems: 'center', borderRadius: 10 }}>
                        <Text style={styles.textBtn}><FontAwesome5 name='cart-plus' size={20}/></Text>
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

    btn: {
        width: '70%',
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