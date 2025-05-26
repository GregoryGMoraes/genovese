import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductFish from '../productFish'
import { BASE_URL } from '../../../utils/conectaDb';
import SearchBar from '../../components/searchBar';

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
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        async function getFish() {
            const response = await fetch(`${BASE_URL}/pescados`)
            const data = await response.json()
            setFish(data);
        }

        getFish();
    }, []);

    const filteredFish = fish.filter((item) => {
        const searchLower = search.toLowerCase();
        return (
            item.name.toLowerCase().includes(searchLower) ||
            item.brand.toLowerCase().includes(searchLower) ||
            item.type.toLowerCase().includes(searchLower) ||
            item.origin.toLowerCase().includes(searchLower)
        );
    }
    );

    return (
        <View style={styles.container}>
            <SearchBar onChangeText={setSearch} value={search} placeholder="Pesquisar" />
            <FlatList
                data={filteredFish}
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