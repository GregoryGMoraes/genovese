import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductChocolates from '../productChocolates'
import { BASE_URL } from '../../db/conectaDb';

export interface ChocolateProps {
    id: string,
    nome: string,
    marca: string,
    descricao: string,
    preco: number,
    tipo: string,
    origem: string,
    imagem: string,
}

export default function FlatItemsChocolates() {
    const [chocolates, setChocolates] = useState<ChocolateProps[]>([])

    useEffect(() => {
        async function getChocolates() {
            const response = await fetch(`${BASE_URL}/chocolates`)
            const data = await response.json()
            setChocolates(data);
        }

        getChocolates();
    }, []);

    return (
        <View style={styles.container}>

            <FlatList
                data={chocolates}
                renderItem={({ item }) => <ProductChocolates chocolate={item} />}
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