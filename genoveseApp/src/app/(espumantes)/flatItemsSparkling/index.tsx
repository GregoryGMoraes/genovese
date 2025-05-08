import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, TextInput} from 'react-native';
import ProductSparkling from '../productSparkling';
import { BASE_URL } from '../../db/conectaDb';

export interface SparklingProps {
    id: string;
    name: string;
    type: string;
    brand: string;
    description: string;
    price: number;
    origin: string;
    image: string;
}

export default function FlatItemsVinhos() {
    const [sparkling, setSparkling] = useState<SparklingProps[]>([]);

    useEffect(() => {
        async function getSparkling() {
            const response = await fetch(`${BASE_URL}/espumantes`);
            const data = await response.json();
            setSparkling(data);
        }

        getSparkling();
    }, []);

    return (
        <View style={styles.container}>                       
            <FlatList
                data={sparkling}
                renderItem={({ item }) => <ProductSparkling sparkling={item} />}
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