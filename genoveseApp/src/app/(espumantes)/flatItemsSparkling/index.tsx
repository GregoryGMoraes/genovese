import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import ProductSparkling from '../productSparkling';
//import { BASE_URL } from '../../../utils/conectaDb';
import SearchBar from '../../components/searchBar';
import { supabase } from '@/src/utils/supabaseClient';
<<<<<<< HEAD
=======
import { COLORS } from '@/src/constants/colors';
import { FONT_SIZES } from '@/src/constants/fontSize';
>>>>>>> constants

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
<<<<<<< HEAD
                item.brand.toLowerCase().includes(searchLower) ||
=======
                //item.brand.toLowerCase().includes(searchLower) ||
>>>>>>> constants
                item.type.toLowerCase().includes(searchLower) ||
                item.origin.toLowerCase().includes(searchLower)
            )
        );
    });

    return (
        <View style={styles.container}>
            <SearchBar onChangeText={setSearch} value={search} placeholder="Pesquisar" />
            {loading ? (
<<<<<<< HEAD
                <ActivityIndicator size="large" color="#560022" style={{ marginTop: 40 }} />
=======
                <ActivityIndicator size="large" color={COLORS.primary} style={{ marginTop: 40 }} />
>>>>>>> constants
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
        backgroundColor: COLORS.backgroundSecundary,
        padding: 10,
    },
    listContent: {
        gap: 15
    },

    search: {
        width: "100%",
        height: 50,
        padding: 10,
        backgroundColor: COLORS.background,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
        marginBottom: 15,
        paddingLeft: 40,
        fontSize: FONT_SIZES.medium,
        color: COLORS.subtitle,
    },

});