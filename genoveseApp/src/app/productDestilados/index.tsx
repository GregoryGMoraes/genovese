import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import { DestiladosProps } from '../flatItemsDestilados/index'
import { router } from 'expo-router'

export default function ProductDestilados({ destilado }: { destilado: DestiladosProps }) {

    return (
        <View style={{ flexDirection: 'row', width: '95%', height: 200, margin: 10, padding: 5, backgroundColor: "white", alignItems: 'center', justifyContent: 'space-between', borderRadius: 10 }}>

            <View style={{ flex: 1 }}>
                <Image style={{ width: 100, height: 100, margin: 5 }} source={{ uri: destilado.imagem }} />
            </View>

            <View style={{ gap: 2, marginLeft: 5, flex: 2, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{destilado.nome}</Text>
                <Text style={{ fontSize: 18 }}>{destilado.tipo}</Text>
                <Text style={{ fontSize: 18 }}>{destilado.marca}</Text>
                <Text style={{ fontSize: 18 }}>Origem: {destilado.origem}</Text>
                <Text style={{ fontSize: 20, color: '#560022', fontWeight: 'bold' }}>R${(destilado.preco).toFixed(2)}</Text>
                <TouchableOpacity style={{ width: '95%', height: 40, margin: 5, backgroundColor: "#560022", alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignItems: 'center', padding: 10 }}
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
                    >Ver Detalhes</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}