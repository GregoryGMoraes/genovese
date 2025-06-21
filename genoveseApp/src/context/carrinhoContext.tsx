import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CartItem {
    id: string;
    name: string;
    image: string;
    brand: string;
    price: number;
    quant: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeToCart: (id: string) => void;
    getTotalCart: () => number;
}

const ContextCart = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const { isLoggedIn } = useAuth();

     useEffect(() => {
        AsyncStorage.getItem('carrinho').then(data => {
            if (data) setCart(JSON.parse(data));
        });
    }, []);

    useEffect(() => {
        AsyncStorage.setItem('carrinho', JSON.stringify(cart));
        console.log('Carrinho atualizado:', cart);
    }, [cart]);
    
    
    const addToCart = (item: CartItem) => {
        if (!isLoggedIn) {
            router.push('../(auth)/modals/singIn');
            return;
        }

        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quant: cartItem.quant + 1 }
                        : cartItem
                );
            }

            return [...prevCart, { ...item, quant: 1 }];
        });
    };

    const removeToCart = (id: string) => {
        setCart((prevCart) => {
            return prevCart.map((item) =>
                item.id === id ? { ...item, quant: item.quant - 1 } : item)

                .filter((item) => item.quant > 0);
        })
    };

    const getTotalCart = () => {
        return cart.reduce((total, item) => total + item.quant, 0);
    }



    return (
        <ContextCart.Provider value={{ cart, addToCart, removeToCart, getTotalCart }}>
            {children}
        </ContextCart.Provider>
    );
}

export const useCart = () => {
    const context = useContext(ContextCart);
    if (!context) {
        throw new Error("useCarrinho está sendo usado fora do CarrinhoProvider");
    }
    return context;
};



