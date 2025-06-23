import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import SearchBar from '../searchBar';
import { supabase } from '@/src/services/supabaseClient';
import { COLORS } from '@/src/constants/colors';

interface ProductFlatItemsProps<T> {
    table: string;
    category?: string;
    renderItem: ({ item }: { item: T }) => JSX.Element;
    searchFields: (keyof T)[];
}

export function ProductFlatItems<T extends { id: string }>({
    table,
    category,
    renderItem,
    searchFields,
}: ProductFlatItemsProps<T>) {
    const [items, setItems] = useState<T[]>([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getItems() {
            setLoading(true);
            let query = supabase.from(table).select('*');
            if (category) query = query.eq('category', category);
            const { data, error } = await query;
            setItems(data || []);
            setLoading(false);
        }
        getItems();
    }, [table, category]);

    const filteredItems = items.filter((item) => {
        const searchLower = search.toLowerCase();
        return searchFields.some((field) =>
            String(item[field] ?? '').toLowerCase().includes(searchLower)
        );
    });

    return (
        <View style={styles.container}>
            <SearchBar onChangeText={setSearch} value={search} placeholder="Pesquisar" />
            {loading ? (
                <ActivityIndicator size="large" color={COLORS.primary} style={{ marginTop: 40 }} />
            ) : (
                <FlatList
                    data={filteredItems}
                    renderItem={renderItem}
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
        gap: 15,
    },
});