import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import ProductDistilled from '../productDistilled'
import SearchBar from '../../components/searchBar';
import { supabase } from '@/src/utils/supabaseClient';
import { ActivityIndicator } from 'react-native';

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

export default function FlatItemsDistilled() {
    const [distilled, setDistilled] = useState<ProdutoProps[]>([])
    const [search, setSearch] = useState<string>('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getDistilled() {
            setLoading(true);
            const { data, error } = await supabase
                .from('produtos')
                .select('*');
            setDistilled(data || []);
            setLoading(false);
            if (error) {
                console.error('Erro ao buscar os detilados:', error);
            }
        }

        getDistilled();
    }, []);

    const filteredDistilled = distilled.filter((item) => {
        const searchLower = search.toLowerCase();
        return (
            item.category === 'Destilado' &&
            (
                item.name.toLowerCase().includes(searchLower) ||
                item.brand.toLowerCase().includes(searchLower) ||
                item.type.toLowerCase().includes(searchLower) ||
                item.origin.toLowerCase().includes(searchLower)
            )
        );
    }
    );

    return (
        <View style={styles.container}>
            <SearchBar onChangeText={setSearch} value={search} placeholder="Pesquisar" />
            {loading ? (
                <ActivityIndicator size="large" color="#560022" style={{ marginTop: 40 }} />
            ) : (
                <FlatList
                    data={filteredDistilled}
                    renderItem={({ item }) => <ProductDistilled distilled={item} />}
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