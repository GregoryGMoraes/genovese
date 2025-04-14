import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import { QueijoProps } from '../flatItemsQueijos/index'
import { router } from 'expo-router'

export default function ProductQueijos({ queijo }: { queijo: QueijoProps }) {

    return (
        <View style={{ flexDirection: 'row', width: '95%', height: 200, margin: 10, padding: 5, backgroundColor: "white", alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>

            <View style={{ flex: 1 }}>
                <Image style={{ width: 100, height: 100, margin: 5 }} source={{ uri: queijo.imagem }} />
            </View>

            <View style={{ gap: 2, marginLeft: 5, flex: 2, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{queijo.nome}</Text>
                <Text style={{ fontSize: 18 }}>{queijo.tipo}</Text>
                <Text style={{ fontSize: 18 }}>{queijo.marca}</Text>
                <Text style={{ fontSize: 18 }}>Origem: {queijo.origem}</Text>
                <Text style={{ fontSize: 20, color: '#560022', fontWeight: 'bold' }}>R${(queijo.preco).toFixed(2)} Kg</Text>
                <TouchableOpacity style={{ width: '95%', height: 40, margin: 5, backgroundColor: "#560022", alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignItems: 'center', padding: 10 }}
                        onPress={() => router.push({
                            pathname: '/detailsQueijos/[id]',
                            params: {
                                id: queijo.id,
                                nome: queijo.nome,
                                tipo: queijo.tipo,
                                marca: queijo.marca,
                                descricao: queijo.descricao,
                                imagem: queijo.imagem,
                                origem: queijo.origem,
                                preco: queijo.preco,

                            }
                        })}
                    >Ver Detalhes</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}