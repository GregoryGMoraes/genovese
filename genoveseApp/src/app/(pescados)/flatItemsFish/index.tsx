import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductFish from '../productFish'
import { BASE_URL } from '../../db/conectaDb';

export interface FishProps {
    id: string,
    name: string,
    type: string,
    brand: string,
    description: string,
    price: number,
    origin: string,
    image: string,
}

export default function FlatItemsFish() {
    const [fish, setFish] = useState<FishProps[]>([])

    useEffect(() => {
        async function getFish() {
            const response = await fetch(`${BASE_URL}/pescados`)
            const data = await response.json()
            setFish(data);
        }

        getFish();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={fish}
                renderItem={({ item }) => <ProductFish fish={item} />}
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