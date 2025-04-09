import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import { VinhoProps } from '../flatItems/index'
import { useRouter } from 'expo-router'

export function Product({ vinho }: { vinho: VinhoProps }) {

    const router = useRouter();

    return (
        <View style={{ flexDirection: 'row', width: 300, height: 200, margin: 10, padding: 5, backgroundColor: "white", alignItems: 'center', justifyContent: 'space-between', borderRadius: 10 }}>

            <View style={{ flex: 1 }}>
                <Image style={{ width: 100, height: 100, margin: 5 }} source={{ uri: vinho.imagem }} />
            </View>

            <View style={{ gap: 2, marginLeft: 5, flex: 2, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{vinho.nome}</Text>
                <Text style={{ fontSize: 18 }}>{vinho.tipoUva}</Text>
                <Text style={{ fontSize: 18 }}>{vinho.marca}</Text>
                <Text style={{ fontSize: 18 }}>Origem: {vinho.paisOrigem}</Text>
                <Text style={{ fontSize: 20, color: 'green' }}>R${(vinho.preco).toFixed(2)}</Text>
                <TouchableOpacity style={{ width: '95%', height: 40, margin: 5, backgroundColor: "#560022", alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignItems: 'center', padding: 10 }}
                        onPress={() => router.navigate('/details')}
                    >Ver Detalhes</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}