import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ChocolateProps } from '../flatItemsChocolates/index'
import { router } from 'expo-router'

export default function ProductChocolates({ chocolate }: { chocolate: ChocolateProps }) {

    return (
        <View style={{ flexDirection: 'row', width: 300, height: 200, margin: 10, padding: 5, backgroundColor: "white", alignItems: 'center', justifyContent: 'space-between', borderRadius: 10 }}>

            <View style={{ flex: 1 }}>
                <Image style={{ width: 100, height: 100, margin: 5 }} source={{ uri: chocolate.imagem }} />
            </View>

            <View style={{ gap: 2, marginLeft: 5, flex: 2, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{chocolate.nome}</Text>
                <Text style={{ fontSize: 18 }}>{chocolate.tipo}</Text>
                <Text style={{ fontSize: 18 }}>{chocolate.marca}</Text>
                <Text style={{ fontSize: 18 }}>Origem: {chocolate.origem}</Text>
                <Text style={{ fontSize: 20, color: 'green' }}>R${(chocolate.preco).toFixed(2)}</Text>
                <TouchableOpacity style={{ width: '95%', height: 40, margin: 5, backgroundColor: "#560022", alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignItems: 'center', padding: 10 }}
                        onPress={() => router.push({
                            pathname: '/detailsChocolates/[id]',
                            params: {
                                id: chocolate.id,
                                nome: chocolate.nome,
                                tipo: chocolate.tipo,
                                marca: chocolate.marca,
                                origem: chocolate.origem,
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