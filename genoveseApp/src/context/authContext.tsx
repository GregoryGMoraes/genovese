import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
    id: string;
    email: string;
}

interface AuthContextProps {
    user: User | null;
    isLoggedIn: boolean;
    login: (userData: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

     useEffect(() => {
        AsyncStorage.getItem('usuario').then(data => {
            if (data) setUser(JSON.parse(data));
        });
    }, []);

    useEffect(() => {
        if (user) {
            AsyncStorage.setItem('usuario', JSON.stringify(user));
            console.log('Usuário logado:', user);
        } else {
            AsyncStorage.removeItem('usuario');
            console.log('Usuário deslogado');
        }
    }, [user]);

    const login = (userData: User) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth está sendo usado fora do AuthProvider');
    }
    return context;
};