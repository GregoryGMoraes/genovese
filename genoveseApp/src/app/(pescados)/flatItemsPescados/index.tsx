import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductPescados from '../productPescados'

export interface PescadoProps {
    id: string,
    nome: string,
    tipo: string,
    descricao: string,
    preco: number,
    origem: string,
    imagem: string,
}

export default function FlatItemsPescados() {
    const [pescados, setPescados] = useState<PescadoProps[]>([])

    useEffect(() => {
        async function getPescados() {
            const response = await fetch("http://192.168.0.170:3000/pescados")
            const data = await response.json()
            setPescados(data);
        }

        getPescados();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={pescados}
                renderItem={({ item }) => <ProductPescados pescado={item} />}
                contentContainerStyle={styles.listContent}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    listContent: {
        gap: 15
    },
});