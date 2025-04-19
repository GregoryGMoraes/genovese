import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailsQueijos() {
    const { id, nome, tipo, marca, origem, imagem, descricao, preco } = useLocalSearchParams();
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: Array.isArray(imagem) ? imagem[0] : imagem }} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{nome}</Text>
                <Text style={styles.subtitle}>Tipo: {tipo}</Text>
                <Text style={styles.subtitle}>Marca: {marca}</Text>
                <Text style={styles.subtitle}>País/Origem: {origem}</Text>
                <Text style={styles.description}>Descrição: {descricao}</Text>
                <Text style={styles.price}>R${Number(preco).toFixed(2)} Kg</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 15,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    infoContainer: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
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
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 10,
        marginBottom: 10,
        lineHeight: 20,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#560022',
        marginTop: 10,
    },
});
