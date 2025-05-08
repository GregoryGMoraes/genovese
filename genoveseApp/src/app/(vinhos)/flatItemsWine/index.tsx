import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { BASE_URL } from '../../db/conectaDb';
import ProductWine from '../productWine';

export interface WineProps {
    id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    type: string;
    origin: string;
    image: string;
}

export default function FlatItemWine() {
    const [wine, setWine] = useState<WineProps[]>([]);

    useEffect(() => {
        async function getWine() {
            const response = await fetch(`${BASE_URL}/vinhos`);
            const data = await response.json();
            setWine(data);
        }

        getWine();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={wine}
                renderItem={({ item }) => <ProductWine wine={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsHorizontalScrollIndicator={false}
            />
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