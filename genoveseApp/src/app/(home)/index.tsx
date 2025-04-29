import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';


export default function Home() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

            <View style={styles.logoContainer}>
                <Image
                    source={require("@/assets/images/logo.jpg")}
                />
            </View>
            <View style={styles.categoriesContainer}>
                <TouchableOpacity style={styles.category} onPress={() => router.push('/flatItemsVinhos')}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1672690025434-a15f3ea587f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
                        <Text style={styles.overlayText}>Vinhos Tintos</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category} onPress={() => router.push('/flatItemsEspumantes')}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1584471138950-a12e2e969878?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxjaGFtcGFnbmUlMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D" }} />
                        <Text style={styles.overlayText}>Espumantes</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category} onPress={() => router.push('/flatItemsPescados')}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVmZWklQzMlQTclQzMlQTNvfGVufDB8fDB8fHww" }} />
                        <Text style={styles.overlayText}>Pescados</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category} onPress={() => router.push('/flatItemsChocolates')}>

                    <View style={styles.imageContainer}>
                        <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1542843137-8791a6904d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNob2NvbGF0ZXN8ZW58MHx8MHx8fDA%3D" }} />
                        <Text style={styles.overlayText}>Chocolates</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category} onPress={() => router.push('/flatItemsFrios')}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1697754069724-2e7379fa811b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVtYnV0aWRvcyUyMGUlMjBxdWVpam9zJTIwYmFubmVyfGVufDB8fDB8fHww" }} />
                        <Text style={styles.overlayText}>
                            Frios</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category} onPress={() => router.push('/flatItemsDestilados')}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.categoryImage} source={{ uri: "https://images.unsplash.com/photo-1609330578888-d7d34c3f8718?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
                        <Text style={styles.overlayText}>Destilados</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    categoriesContainer: {
        gap: 15,
    },
    category: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    categoryImage: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
    },
    imageContainer: {
        position: 'relative',
    },

    overlayText: {
        position: 'absolute',
        color: '#560022',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#fff',
        height: 30,
        width: 150,
        alignItems: 'center',
        borderBottomRightRadius: 10,
        paddingTop: 5,
        textAlign: 'center',
        justifyContent: 'center',
    },
});