import { useState, useEffect} from 'react'
import { FlatList } from 'react-native'
import { Product } from '../product'

export interface VinhoProps{
    id: string,
    nome: string,
    marca: string,
    descricao: string,
    preco: number,
    tipoUva: string,
    paisOrigem: string,
    imagem: string,
}

export function FlatItems(){
    const [ vinhos, setVinhos] = useState<VinhoProps[]>([]) 

    useEffect(() =>{
        async function getVinhos(){
            const response = await fetch("http://192.168.0.170:3000/vinhos")
            const data = await response.json()
            setVinhos(data); 
        }

        getVinhos();
    },[]);

    return(
        <FlatList 
        data={vinhos}
        renderItem={ ({item}) => <Product vinho={item}/>}
        horizontal={true}
        contentContainerStyle={{gap:2}}
        showsHorizontalScrollIndicator={false}
        />
    )
}