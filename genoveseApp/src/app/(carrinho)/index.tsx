import { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";


export default function Carrinho() {

    return (
        <View style={styles.container}>

            <View style={styles.carrinhoContainer}>
                <View style={{ flexDirection: 'row', 
                    justifyContent: 'space-around', 
                    height: 100,
                    alignItems: 'center',
                    borderLeftColor: '#fff',
                    borderRightColor: '#fff',
                    borderTopColor: '#fff',
                    borderBottomColor: '#D3D3D3',
                    borderWidth: 1,
                    }}>
                    <Image style={{ width: 80, height: 80 }} source={require('@/assets/images/logo.jpg')} />
                    <Text>Nome</Text>
                    <Text>Marca</Text>
                    <Text>R$00.00</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>
                    Enviar Pedido
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#560022',
        marginBottom: 10,
    },

    carrinhoContainer: {
        width: '100%',
        height: 500,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2
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
    },



})