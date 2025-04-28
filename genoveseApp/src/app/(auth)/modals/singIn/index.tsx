import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import Modal from 'react-native-modal';
import { FontAwesome5 } from '@expo/vector-icons';


export default function SingInModal() {

    // Declaração dos estados para o e-mail, senha, visibilidade da modal, carregamento e mensagem de erro
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setModalVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); 

    // Fecha a modal e volta para a tela anterior
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        if (isModalVisible) {
            router.back();
        }
    };
    
   
    // Verifica se o e-mail e a senha estão corretos
    // Se estiverem corretos, fecha a modal e volta para a tela anterior
    const handleLogin = async () => {
        setIsLoading(true); // Inicia o carregamento
        setErrorMessage(''); // Limpa a mensagem de erro
       
        // Simulação de um login com e-mail e senha fixos
        const emailValido = 'test@test.com';
        const passwordValido = '12345';

        // Simula login com carregamento
        setTimeout(() => {
            if (email === emailValido && password === passwordValido) {
                console.log('Login bem sucedido', 'Você está logado com sucesso!');
                router.back();
                setEmail('');
                setPassword('');
            } else {
                setErrorMessage('E-mail ou senha inválidos!'); // Mensagem de erro
                console.log('Login falhou', 'E-mail ou senha inválidos!');
            }
            setIsLoading(false); //Temina o carregamento
        }, 1000); // Simula um atraso de 1 segundos
    };

    return (
        <View style={styles.container}>
            <Modal isVisible={isModalVisible} swipeDirection={'down'} style={styles.modalContainer}>
                <TouchableOpacity style={styles.backButton} onPress={toggleModal}>
                    <Text style={{ padding: 5 }}>
                        <FontAwesome5 name="arrow-left" size={18} color="#550026" />
                    </Text>
                </TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require('@/assets/images/logo.jpg')}
                />
                <Text style={styles.title}>Seja Bem-Vindo ao App</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#666"
                />
                <TextInput
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#666"
                />

                { errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}


                <TouchableOpacity style={styles.viewBtn} onPress={handleLogin} disabled={isLoading}>
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#fff" /> // Exibe o indicador de carregamento
                    ) : (
                        <Text style={styles.textBtn}>Entrar</Text> // Exibe o texto "Entrar" quando não está carregando
                    )}
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        opacity: 0.9,

    },

    modalContainer: {
        width: '90%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
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

    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
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