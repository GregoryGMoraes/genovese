import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import ProductSparkling from '../productSparkling';
//import { BASE_URL } from '../../../utils/conectaDb';
import SearchBar from '../../components/searchBar';
import { supabase } from '@/src/utils/supabaseClient';

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


export default function FlatItemsVinhos() {
    const [sparkling, setSparkling] = useState<ProdutoProps[]>([]);
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getSparkling() {
            setLoading(true);
            const { data, error } = await supabase
                .from('produtos')
                .select('*');
            setSparkling(data || []);
            setLoading(false);
        }
        getSparkling();
    }, []);

    const filteredSparkling = sparkling.filter((item) => {
        const searchLower = search.toLowerCase();
        return (
            item.category === 'Espumante' && (
                item.name.toLowerCase().includes(searchLower) ||
                item.brand.toLowerCase().includes(searchLower) ||
                item.type.toLowerCase().includes(searchLower) ||
                item.origin.toLowerCase().includes(searchLower)
            )
        );
    });

    return (
        <View style={styles.container}>
            <SearchBar onChangeText={setSearch} value={search} placeholder="Pesquisar" />
            {loading ? (
                <ActivityIndicator size="large" color="#560022" style={{ marginTop: 40 }} />
            ) : (
                <FlatList
                    data={filteredSparkling}
                    renderItem={({ item }) => <ProductSparkling sparkling={item} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsHorizontalScrollIndicator={false}
                />
            )}
        </View>
    );
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

    search: {
        width: "100%",
        height: 50,
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        marginBottom: 15,
        paddingLeft: 40,
        fontSize: 16,
        color: "#333",
    },

});