import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native'
import ProdutoCold from '../productCold'
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

export default function FlatItemsFrios() {
    const [cold, setCold] = useState<ProdutoProps[]>([])
    const [search, setSearch] = useState<string>('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getCold() {
            setLoading(true);
            const { data, error } = await supabase
                .from('produtos')
                .select('*');
            setCold(data || []);
            setLoading(false);
            if (error) {
                console.error('Erro ao buscar os frios:', error);
            }
        }

        getCold();
    }, []);

    const filteredCold = cold.filter((item) => {
        const searchLower = search.toLowerCase();
        return (
            item.category === 'Frios' &&
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
<<<<<<< HEAD
                <ActivityIndicator size="large" color="#560022" style={{ marginTop: 40 }} />
=======
                <ActivityIndicator size="large" color={COLORS.primary} style={{ marginTop: 40 }} />
>>>>>>> constants
            ) : (
                <FlatList
                    data={filteredCold}
                    renderItem={({ item }) => <ProdutoCold cold={item} />}
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