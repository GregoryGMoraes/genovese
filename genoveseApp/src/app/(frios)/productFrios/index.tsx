import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FriosProps } from '../flatItemsFrios/index'
import { router } from 'expo-router'

export default function ProductFrios({ frios }: { frios: FriosProps }) {

    return (
        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: frios.imagem }} />
            </View>

            <View style={styles.containerProduct}>
                <Text style={styles.title}>{frios.nome}</Text>
                <Text style={styles.subtitle}>{frios.tipo}</Text>
                <Text style={styles.subtitle}>{frios.marca}</Text>
                <Text style={styles.subtitle}>Origem: {frios.origem}</Text>
                <Text style={styles.price}>R${(frios.preco).toFixed(2)} Kg</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}
                        onPress={() => router.push({
                            pathname: '/detailsFrios/[id]',
                            params: {
                                id: frios.id,
                                nome: frios.nome,
                                tipo: frios.tipo,
                                marca: frios.marca,
                                descricao: frios.descricao,
                                imagem: frios.imagem,
                                origem: frios.origem,
                                preco: frios.preco,

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