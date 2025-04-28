import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, TextInput} from 'react-native';
import ProductEspumantes from '../productEspumantes';
import { BASE_URL } from '../../db/conectaDb';

export interface EspumanteProps {
    id: string;
    nome: string;
    marca: string;
    descricao: string;
    preco: number;
    tipoUva: string;
    paisOrigem: string;
    imagem: string;
}

export default function FlatItemsVinhos() {
    const [espumantes, setEspumantes] = useState<EspumanteProps[]>([]);

    useEffect(() => {
        async function getEspumantes() {
            const response = await fetch(`${BASE_URL}/espumantes`);
            const data = await response.json();
            setEspumantes(data);
        }

        getEspumantes();
    }, []);

    return (
        <View style={styles.container}>                       
            <FlatList
                data={espumantes}
                renderItem={({ item }) => <ProductEspumantes espumante={item} />}
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