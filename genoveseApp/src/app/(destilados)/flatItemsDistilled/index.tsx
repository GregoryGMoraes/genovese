import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductDistilled from '../productDistilled'
import { BASE_URL } from '../../db/conectaDb';

export interface DistilledProps {
    id: string,
    name: string,
    brand: string,
    description: string,
    price: number,
    type: string,
    origin: string,
    image: string,
}

export default function FlatItemsDistilled() {
    const [distilled, setDistilled] = useState<DistilledProps[]>([])

    useEffect(() => {
        async function getDistilled() {
            const response = await fetch(`${BASE_URL}/destilados`)
            const data = await response.json()
            setDistilled(data);
        }

        getDistilled();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={distilled}
                renderItem={({ item }) => <ProductDistilled distilled={item} />}
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