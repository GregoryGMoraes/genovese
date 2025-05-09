import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductCold from '../productCold'
import { BASE_URL } from '../../db/conectaDb';

export interface ColdProps {
    id: string,
    name: string,
    type: string,
    brand: string,
    description: string,
    price: number,
    origin: string,
    image: string,
}

export default function FlatItemsFrios() {
    const [cold, setCold] = useState<ColdProps[]>([])

    useEffect(() => {
        async function getCold() {
            const response = await fetch(`${BASE_URL}/frios`)
            const data = await response.json()
            setCold(data);
        }

        getCold();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={cold}
                renderItem={({ item }) => <ProductCold cold={item} />}
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