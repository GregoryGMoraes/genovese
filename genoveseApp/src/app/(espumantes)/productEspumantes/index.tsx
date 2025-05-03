import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { EspumanteProps } from '../flatItemsEspumantes/index'
import { router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';
import { useCarrinho } from '../../(carrinho)/context/carrinhoContext';

export default function ProductEspumantes({ espumante }: { espumante: EspumanteProps }) {
    const { addAoCarrinho } = useCarrinho();

    const handleAddAoCarrinho = () => {
        const item = {
            id: espumante.id,
            nome: espumante.nome,
            imagem: espumante.imagem,
            marca: espumante.paisOrigem,
            preco: espumante.preco,
            quantidade: 1,
        };
        addAoCarrinho(item);
        <Text style={{ color: 'green' }}>Item adicionado ao carrinho!'</Text>
        console.log('Item adicionado ao carrinho:', item);
    };
    return (
        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: espumante.imagem }} />
            </View>

            <View style={styles.containerProduct}>
                <Text style={styles.title}>{espumante.nome}</Text>
                <Text style={styles.subtitle}>{espumante.tipoUva}</Text>
                <Text style={styles.subtitle}>{espumante.marca}</Text>
                <Text style={styles.subtitle}>Origem: {espumante.paisOrigem}</Text>
                <Text style={styles.price}>R${(espumante.preco).toFixed(2)}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', padding: 10 }}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}
                            onPress={() => router.push({
                                pathname: '/detailsEspumantes/[id]',
                                params: {
                                    id: espumante.id,
                                    nome: espumante.nome,
                                    tipo: espumante.tipoUva,
                                    marca: espumante.marca,
                                    descricao: espumante.descricao,
                                    imagem: espumante.imagem,
                                    origem: espumante.paisOrigem,
                                    preco: espumante.preco,

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