import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native'
import ProductChocolate from '../productChocolate'
import { supabase } from '@/src/utils/supabaseClient'
import SearchBar from '../../components/searchBar';

export interface ProdutoProps {
    id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    category: string;
    type: string;
    origin: string;
    image: string;
}


export default function FlatItemsChocolate() {
    const [chocolate, setChocolate] = useState<ProdutoProps[]>([])
    const [search, setSearch] = useState<string>('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getChocolate() {
            setLoading(true);
            const { data, error } = await supabase
                .from('produtos')
                .select('*');
            setChocolate(data || []);
            setLoading(false);
            if (error) {    
                console.error('Erro ao buscar os chocolates:', error);
            }
        }
        getChocolate();
    }, []);

    const filterdChocolate = chocolate.filter((item) => {
        const searchLower = search.toLowerCase();
        return (
            item.category === 'Chocolate' && (
                item.name.toLowerCase().includes(searchLower) ||
                item.brand.toLowerCase().includes(searchLower) ||
                item.type.toLowerCase().includes(searchLower) ||
                item.origin.toLowerCase().includes(searchLower)
            ));
    }
    );

    return (
        <View style={styles.container}>
            <SearchBar onChangeText={setSearch} value={search} placeholder="Pesquisar" />
            {loading ? (
                <ActivityIndicator size="large" color="#560022" style={{ marginTop: 40 }} />
            ) : (
            <FlatList
                data={filterdChocolate}
                renderItem={({ item }) => <ProductChocolate chocolate={item} />}
                contentContainerStyle={styles.listContent}
                showsHorizontalScrollIndicator={false}
            />
            )}
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