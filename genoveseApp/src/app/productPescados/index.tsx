import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import { PescadoProps } from '../flatItemsPescados'
import { router } from 'expo-router'

export default function ProductPescados({ pescado }: { pescado: PescadoProps }) {

    return (
        <View style={{ flexDirection: 'row', width: '95%', height: 200, margin: 10, padding: 5, backgroundColor: "white", alignItems: 'center', justifyContent: 'space-between', borderRadius: 10 }}>

            <View style={{ flex: 1 }}>
                <Image style={{ width: 100, height: 100, margin: 5 }} source={{ uri: pescado.imagem }} />
            </View>

            <View style={{ gap: 2, marginLeft: 5, flex: 2, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{pescado.nome}</Text>
                <Text style={{ fontSize: 18 }}>{pescado.tipo}</Text>
                <Text style={{ fontSize: 18 }}>Origem: {pescado.origem}</Text>
                <Text style={{ fontSize: 20, color: '#560022', fontWeight: 'bold' }}>R${(pescado.preco).toFixed(2)}</Text>
                <TouchableOpacity style={{ width: '95%', height: 40, margin: 5, backgroundColor: "#560022", alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignItems: 'center', padding: 10 }}
                        onPress={() => router.push({
                            pathname: '/detailsPescados/[id]',
                            params: {
                                id: pescado.id,
                                nome: pescado.nome,
                                tipo: pescado.tipo,
                                origem: pescado.origem,
                                imagem: pescado.imagem,
                                descricao: pescado.descricao,
                                preco: pescado.preco,

                            }
                        })}
                    >Ver Detalhes</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}