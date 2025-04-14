import React from 'react';
import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailsChocolates() {
    const { id, nome, tipo, marca, imagem, origem, descricao, preco } = useLocalSearchParams();
    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{width: 200, height: 200}} source={{ uri: Array.isArray(imagem) ? imagem[0] : imagem }}/>
            </View>

            <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {nome}</Text>
                <Text style={{ fontSize: 18 }}>Tipo: {tipo}</Text>
                <Text style={{ fontSize: 18 }}>Marca: {marca}</Text>
                <Text style={{ fontSize: 18 }}>País/Origem: {origem}</Text>
                <Text style={{ fontSize: 18 }}>Descrição: {descricao}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#560022' }}>R${Number(preco).toFixed(2)}</Text>
            </View>
        </>
    );
}