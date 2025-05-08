import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductChocolate from '../productChocolate'
import { BASE_URL } from '../../db/conectaDb';

export interface ChocolateProps {
    id: string,
    name: string,
    brand: string,
    description: string,
    price: number,
    type: string,
    origin: string,
    image: string,
}

export default function FlatItemsChocolate() {
    const [chocolate, setChocolate] = useState<ChocolateProps[]>([])

    useEffect(() => {
        async function getChocolate() {
            const response = await fetch(`${BASE_URL}/chocolates`)
            const data = await response.json()
            setChocolate(data);
        }

        getChocolate();
    }, []);

    return (
        <View style={styles.container}>

            <FlatList
                data={chocolate}
                renderItem={({ item }) => <ProductChocolate chocolate={item} />}
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