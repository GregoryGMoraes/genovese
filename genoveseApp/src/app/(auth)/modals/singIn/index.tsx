import React, { useState } from 'react';
import { View, Text, Alert, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function SingInModal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        if (email === '' || password === '') {
            Alert.alert("Preencha todos os campos");
            setLoading(false);
            return;
        }

        setLoading(false);
        router.back();
        setEmail('');
        setPassword('');
    }


    return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={{ padding: 5 }}><FontAwesome5 name="arrow-left" size={18} color="#550026" /></Text>
                </TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require("@/assets/images/logo.jpg")}
                />
            <Text style={styles.title}>Seja Bem-Vindo ao App</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" placeholderTextColor="#666" />
            <TextInput secureTextEntry style={styles.input} value={password} onChangeText={setPassword} placeholder="Digite sua senha" placeholderTextColor="#666" />

            <TouchableOpacity style={styles.viewBtn} onPress={handleLogin}>
                <Text style={styles.textBtn}>{loading ? 'Carregando...' : 'Entrar'}</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#560022",
        marginBottom: 20,
        textAlign: "center",
    },

    subTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#560022",
        marginBottom: 20,
        marginTop: 10,
        textAlign: "center",
    },

    input: {
        width: "100%",
        height: 40,
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
        color: "#333",
    },

    backButton: {
        width: 40,
        height: 40,
        position: 'absolute', 
        justifyContent: 'center',
        alignItems: 'center',
        top: 10, 
        left: 10,
    },
    viewBtn: {
        width: "100%",
        height: 40,
        borderRadius: 8,
        backgroundColor: "#560022",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    textBtn: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },
});