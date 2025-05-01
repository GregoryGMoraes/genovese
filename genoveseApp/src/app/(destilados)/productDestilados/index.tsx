import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DestiladosProps } from '../flatItemsDestilados/index'
import { router } from 'expo-router'
import { useCarrinho } from '../../(carrinho)/context/carrinhoContext';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ProductDestilados({ destilado }: { destilado: DestiladosProps }) {
    const { addAoCarrinho } = useCarrinho();

    const handleAddAoCarrinho = () => {
        const item = {
            id: destilado.id,
            nome: destilado.nome,
            imagem: destilado.imagem,
            marca: destilado.origem,
            preco: destilado.preco,
            quantidade: 1,
        };
        addAoCarrinho(item);
        <Text style={{ color: 'green' }}>Item adicionado ao carrinho!'</Text>
        console.log('Item adicionado ao carrinho:', item);
    };
    return (
        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: destilado.imagem }} />
            </View>

            <View style={styles.containerProduct}>
                <Text style={styles.title}>{destilado.nome}</Text>
                <Text style={styles.subtitle}>{destilado.tipo}</Text>
                <Text style={styles.subtitle}>{destilado.marca}</Text>
                <Text style={styles.subtitle}>Origem: {destilado.origem}</Text>
                <Text style={styles.price}>R${(destilado.preco).toFixed(2)}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', padding: 10 }}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}
                            onPress={() => router.push({
                                pathname: '/detailsDestilados/[id]',
                                params: {
                                    id: destilado.id,
                                    nome: destilado.nome,
                                    tipo: destilado.tipo,
                                    marca: destilado.marca,
                                    origem: destilado.origem,
                                    imagem: destilado.imagem,
                                    descricao: destilado.descricao,
                                    preco: destilado.preco,

                                }
                            })}
                        >Detalhes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '30%', height: 40, margin: 5, backgroundColor: "#560022", alignItems: 'center', borderRadius: 10 }}>
                        <Text style={styles.textBtn} onPress={handleAddAoCarrinho} ><FontAwesome5 name='cart-plus' size={20} /></Text>
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