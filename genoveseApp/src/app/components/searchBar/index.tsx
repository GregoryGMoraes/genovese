import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

export default function SearchBar({ value, onChangeText, placeholder = "Pesquisar" }: SearchBarProps) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
            <FontAwesome5 name='search' size={20} color='#550026' style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        position: 'relative',
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
        paddingRight: 35,
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: '70%',
        transform: [{ translateY: -10 }],
        zIndex: 1,
        opacity: 0.8,
    },
});