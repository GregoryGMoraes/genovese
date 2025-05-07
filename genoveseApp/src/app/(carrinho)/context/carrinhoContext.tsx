import { createContext, useContext, useState } from "react";
import { useAuth } from "../../(auth)/context/authContext";
import { router } from "expo-router";

interface CarrinhoItem {
    id: string;
    nome: string;
    imagem: string;
    marca: string;
    preco: number;
    quantidade: number;
}

interface CarrinhoContextType {
    carrinho: CarrinhoItem[];
    addAoCarrinho: (item: CarrinhoItem) => void;
    removeDoCarrinho: (id: string) => void;
    getTotalCarrinho: () => number;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);
    const { isLoggedIn } = useAuth();

    const addAoCarrinho = (item: CarrinhoItem) => {
        if (!isLoggedIn) {
            router.push('../(auth)/modals/singIn');
            return;
        }

        setCarrinho((prevCarrinho) => {
            const existingItem = prevCarrinho.find((carrinhoItem) => carrinhoItem.id === item.id);
            if (existingItem) {
                // Atualiza a quantidade se o item já estiver no carrinho
                return prevCarrinho.map((carrinhoItem) =>
                    carrinhoItem.id === item.id
                        ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade + 1 }
                        : carrinhoItem
                );
            }
            // Adiciona o novo item ao carrinho
            return [...prevCarrinho, { ...item, quantidade: 1 }];
        });
    };

    const removeDoCarrinho = (id: string) => {
        setCarrinho((prevCarrinho) => {
            return prevCarrinho.map((item) =>
                item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item)

                .filter((item) => item.quantidade > 0);
        })
    };

    const getTotalCarrinho = () => {    
        return carrinho.reduce((total, item) => total + item.quantidade, 0);
    }



    return (
        <CarrinhoContext.Provider value={{ carrinho, addAoCarrinho, removeDoCarrinho, getTotalCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export const useCarrinho = () => {
    const context = useContext(CarrinhoContext);
    if (!context) {
        throw new Error("useCarrinho está sendo usado fora do CarrinhoProvider");
    }
    return context;
};



