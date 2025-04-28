import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductDestilados from '../productDestilados'
import { BASE_URL } from '../../db/conectaDb';

export interface DestiladosProps {
    id: string,
    nome: string,
    marca: string,
    descricao: string,
    preco: number,
    tipo: string,
    origem: string,
    imagem: string,
}

export default function FlatItemsDestilados() {
    const [destilados, setDestilados] = useState<DestiladosProps[]>([])

    useEffect(() => {
        async function getDestilados() {
            const response = await fetch(`${BASE_URL}/destilados`)
            const data = await response.json()
            setDestilados(data);
        }

        getDestilados();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={destilados}
                renderItem={({ item }) => <ProductDestilados destilado={item} />}
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