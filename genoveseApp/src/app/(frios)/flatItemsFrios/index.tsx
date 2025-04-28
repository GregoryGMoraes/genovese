import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductFrios from '../productFrios'
import { BASE_URL } from '../../db/conectaDb';

export interface FriosProps {
    id: string,
    nome: string,
    tipo: string,
    marca: string,
    descricao: string,
    preco: number,
    origem: string,
    imagem: string,
}

export default function FlatItemsFrios() {
    const [frios, setFrios] = useState<FriosProps[]>([])

    useEffect(() => {
        async function getFrios() {
            const response = await fetch(`${BASE_URL}/frios`)
            const data = await response.json()
            setFrios(data);
        }

        getFrios();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={frios}
                renderItem={({ item }) => <ProductFrios frios={item} />}
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