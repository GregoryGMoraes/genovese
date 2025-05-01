import { createContext, useContext, useState } from "react";

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
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);

    const addAoCarrinho = (item: CarrinhoItem) => {
        setCarrinho((prevCarrinho) => {
            const existingItem = prevCarrinho.find((carrinhoItem) => carrinhoItem.id === item.id);
            if (existingItem) {
                // Atualiza a quantidade se o item já estiver no carrinho
                return prevCarrinho.map((carrinhoItem) =>
                    carrinhoItem.id === item.id
                        ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade + item.quantidade }
                        : carrinhoItem
                );
            }
            // Adiciona o novo item ao carrinho
            return [...prevCarrinho, item];
        });
    };

    const removeDoCarrinho = (id: string) => {
        setCarrinho((prevCarrinho) => prevCarrinho.filter((item) => item.id !== id));
    };

   

    return (
        <CarrinhoContext.Provider value={{ carrinho, addAoCarrinho, removeDoCarrinho }}>
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



