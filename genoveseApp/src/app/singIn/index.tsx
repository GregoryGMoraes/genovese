import React from 'react';
import { TouchableOpacity, Text, TextInput, Image, View, StyleSheet } from "react-native";

export default function SingIn() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/images/logo.jpg")}
            />
            <Text style={styles.title}>Seja Bem-Vindo ao App.</Text>
            <TextInput style={styles.input} placeholder="Digite seu e-mail"></TextInput>
            <TextInput secureTextEntry style={styles.input} placeholder="Digite seu senha"></TextInput>
           
                <TouchableOpacity style={styles.viewBtn}>
                      <Text style={styles.textBtn}>Entrar</Text>
                </TouchableOpacity>
           </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffff",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
    },
    
    input: {
        width: "95%",
        height: 50,
        padding: 10,
        backgroundColor: "#e4f3d8",
        marginTop: 15,
        borderRadius: 5,
    },

    viewBtn: {
        marginTop: 10,
        width: "95%",
        height: 50,
        borderRadius: 5,
        backgroundColor:"#560022",
        
    },
    
    textBtn: {
        color: "white",
        fontWeight: "bold",
        padding: 12,
        textAlign: "center",
        fontSize: 18,
    }
});


