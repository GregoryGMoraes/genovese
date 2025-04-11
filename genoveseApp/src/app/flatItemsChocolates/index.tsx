import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import ProductChocolates from '../productChocolates'

export interface ChocolateProps {
    id: string,
    nome: string,
    marca: string,
    descricao: string,
    preco: number,
    tipo: string,
    origem: string,
    imagem: string,
}

export default function FlatItemsChocolates() {
    const [chocolates, setChocolates] = useState<ChocolateProps[]>([])

    useEffect(() => {
        async function getChocolates() {
            const response = await fetch("http://192.168.0.170:3000/chocolates")
            const data = await response.json()
            setChocolates(data);
        }

        getChocolates();
    }, []);

    return (
        <FlatList
            data={chocolates}
            renderItem={({ item }) => <ProductChocolates chocolate={item} />}
            contentContainerStyle={{ gap: 2 }}
            showsHorizontalScrollIndicator={false}
        />
    )
}