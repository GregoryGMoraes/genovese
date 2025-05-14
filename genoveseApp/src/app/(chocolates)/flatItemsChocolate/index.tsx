import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductChocolate from '../productChocolate'
import { BASE_URL } from '../../db/conectaDb';
import SearchBar from '../../components/searchBar';

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
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        async function getChocolate() {
            const response = await fetch(`${BASE_URL}/chocolates`)
            const data = await response.json()
            setChocolate(data);
        }

        getChocolate();
    }, []);

    const filterdChocolate = chocolate.filter((item) => {
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
                data={filterdChocolate}
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