import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import Modal from 'react-native-modal';
import { FontAwesome5 } from '@expo/vector-icons';
import { useAuth } from '../../../../context/authContext';
<<<<<<< HEAD
import { supabase } from '@/src/utils/supabaseClient';
=======
>>>>>>> constants

export default function SingInModal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [isModalVisible, setModalVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        if (isModalVisible) {
            router.back();
        }
    };

    const handleLogin = async () => {
        setIsLoading(true);
        setErrorMessage('');
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setIsLoading(false);

        if (error) {
            setErrorMessage('E-mail ou senha inválidos!');
            console.log('Login falhou', error.message);
        } else {
            if (data.user && typeof data.user.email === 'string') {
                login({ ...data.user, email: data.user.email as string });
            } else {
                setErrorMessage('E-mail não encontrado no usuário retornado.');
                setIsLoading(false);
                return;
            }
            console.log('Login bem-sucedido', data);
            setEmail('');
            setPassword('');
            router.back();
        }
    };

    const handleCadastro = async () => {
        setIsLoading(true);
        setErrorMessage('');
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name }
            }
        });
        setIsLoading(false);

        if (error) {
            setErrorMessage(error.message || 'Erro ao criar conta!');
            console.log('Cadastro falhou', error.message);
        } else {
            setErrorMessage('');
            setIsSignup(false);
            console.log('Conta criada com sucesso! Faça login.', data);
        }
    };

    return (
        <View style={styles.container}>

            <Modal isVisible={isModalVisible} swipeDirection={'down'} style={styles.modalContainer}>
                <TouchableOpacity style={styles.backButton} onPress={toggleModal}>
                    <Text style={{ padding: 5 }}>
                        <FontAwesome5 name="arrow-left" size={18} color="#666" />
                    </Text>
                </TouchableOpacity>

                <Image
                    style={styles.logo}
                    source={require('@/assets/images/logo.jpg')}
                />
                <Text style={styles.title}>{isSignup ? 'Crie sua conta' : 'Seja Bem-Vindo ao App'}</Text>
                {isSignup && (
                    <View style={styles.inputContainer}>
                        <FontAwesome5 name="id-card" size={18} color="#550026" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Digite seu nome"
                            placeholderTextColor="#666"
                        />
                    </View>
                )}

                <View style={styles.inputContainer}>
                    <FontAwesome5 name="user-alt" size={18} color="#550026" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#666"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <FontAwesome5 name="lock" size={18} color="#550026" style={styles.icon} />
                    <TextInput
                        secureTextEntry
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#666"
                    />
                </View>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}


                <TouchableOpacity
                    style={styles.viewBtn}
                    onPress={isSignup ? handleCadastro : handleLogin}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.textBtn}>{isSignup ? 'Cadastrar' : 'Entrar'}</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsSignup(!isSignup)} style={{ marginTop: 15 }}>
                    <Text style={{ color: '#560022', fontWeight: 'bold' }}>
                        {isSignup ? 'Já tem conta? Entrar' : 'Não tem conta? Cadastre-se'}
                    </Text>
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
        width: 200,
        height: 200,
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

    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: "#333",
        backgroundColor: "transparent",
        borderWidth: 0,
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