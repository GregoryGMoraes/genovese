import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import ProductDestilados from '../productDestilados'

export interface DestiladosProps {
    id: string,
    nome: string,
    marca: string,
    descricao: string,
    preco: number,
    tipo: string,
    origem: string,
    imagem: string,
}

export default function FlatItemsDestilados() {
    const [destilados, setDestilados] = useState<DestiladosProps[]>([])

    useEffect(() => {
        async function getDestilados() {
            const response = await fetch("http://192.168.0.170:3000/destilados")
            const data = await response.json()
            setDestilados(data);
        }

        getDestilados();
    }, []);

    return (
        <FlatList
            data={destilados}
            renderItem={({ item }) => <ProductDestilados destilado={item} />}
            contentContainerStyle={{ gap: 2 }}
            showsHorizontalScrollIndicator={false}
        />
    )
}