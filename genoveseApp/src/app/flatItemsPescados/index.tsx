import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import ProductPescados from '../productPescados'

export interface PescadoProps {
    id: string,
    nome: string,
    tipo: string,
    descricao: string,
    preco: number,
    origem: string,
    imagem: string,
}

export default function FlatItemsPescados() {
    const [pescados, setPescados] = useState<PescadoProps[]>([])

    useEffect(() => {
        async function getPescados() {
            const response = await fetch("http://192.168.0.170:3000/pescados")
            const data = await response.json()
            setPescados(data);
        }

        getPescados();
    }, []);

    return (
        <FlatList
            data={pescados}
            renderItem={({ item }) => <ProductPescados pescado={item} />}
            contentContainerStyle={{ gap: 2 }}
            showsHorizontalScrollIndicator={false}
        />
    )
}

