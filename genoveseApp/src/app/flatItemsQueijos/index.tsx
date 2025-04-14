import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import ProductQueijos from '../ProductQueijos'

export interface QueijoProps {
    id: string,
    nome: string,
    tipo: string,
    marca: string,
    descricao: string,
    preco: number,
    origem: string,
    imagem: string,
}

export default function FlatItemsQueijos() {
    const [queijos, setQueijos] = useState<QueijoProps[]>([])

    useEffect(() => {
        async function getQueijos() {
            const response = await fetch("http://192.168.0.170:3000/queijos")
            const data = await response.json()
            setQueijos(data);
        }

        getQueijos();
    }, []);

    return (
        <FlatList
            data={queijos}
            renderItem={({ item }) => <ProductQueijos queijo={item} />}
            contentContainerStyle={{ gap: 2 }}
            showsHorizontalScrollIndicator={false}
        />
    )
}

