import { router } from 'expo-router';
import { useState } from 'react';
import { TouchableOpacity, Text, TextInput, Image, View, StyleSheet, Alert, Pressable } from "react-native";


export default function SingIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    
    async function handleSignIn() {
        setLoading(true);
        if (email === '' || password === '') {
            Alert.alert("Preencha todos os campos");
            setLoading(false);
            return;
        }

        setLoading(false);
        router.push('./(home)');
        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../../../assets/images/logo.jpg")}
            />

            <Text style={styles.title}>Seja Bem-Vindo ao App</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" placeholderTextColor="#666" />
            <TextInput secureTextEntry style={styles.input} value={password} onChangeText={setPassword} placeholder="Digite sua senha" placeholderTextColor="#666" />

            <TouchableOpacity style={styles.viewBtn} onPress={handleSignIn}>
                <Text style={styles.textBtn}>{loading ? 'Carregando...' : 'Entrar'}</Text>

            </TouchableOpacity>


            <Pressable style={styles.subTitle}>Faça seu cadastro conosco!</Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#560022",
        marginBottom: 20,
        textAlign: "center",
    },

    subTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#560022",
        marginBottom: 20,
        marginTop: 10,
        textAlign: "center",
    },

    input: {
        width: "100%",
        height: 50,
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
        color: "#333",
    },
    viewBtn: {
        width: "100%",
        height: 50,
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
        fontSize: 18,
    },
});


