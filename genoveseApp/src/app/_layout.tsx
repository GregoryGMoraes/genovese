import { FontAwesome5 } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import { SafeAreaView, Text, StatusBar, TouchableOpacity, View } from 'react-native'
import { AuthProvider, useAuth } from './(auth)/context/authContext'
import { CarrinhoProvider, useCarrinho } from './(carrinho)/context/carrinhoContext'

export default function Layout() {
    return (

        // O AuthProvider envolve toda a aplicação, permitindo o acesso ao contexto de autenticação
        // em qualquer parte do aplicativo. Isso é útil para gerenciar o estado de autenticação
        // e fornecer informações sobre o usuário logado ou não.
        <AuthProvider>
            <CarrinhoProvider>
                <StatusBar backgroundColor="#560022" barStyle="light-content" />
                <SafeAreaView style={{ flex: 1 }}>

                    <Stack>
                        <Stack.Screen name="index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Genovese Vinhos',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(auth)/modals/singIn/index" options={{ presentation: 'modal', headerShown: false }} />

                        <Stack.Screen name="(carrinho)/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Carrinho',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(home)/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Genovese Vinhos',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(vinhos)/flatItemsVinhos/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Vinhos',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(vinhos)/detailsVinhos/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(espumantes)/flatItemsEspumantes/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Espumantess',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(espumantes)/detailsEspumantes/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(pescados)/flatItemsPescados/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Pescados',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff', headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(pescados)/detailsPescados/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(chocolates)/flatItemsChocolates/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Chocolates',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(chocolates)/detailsChocolates/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(frios)/flatItemsFrios/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Queijos',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(frios)/detailsFrios/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff', headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(destilados)/flatItemsDestilados/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Destilados',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(destilados)/detailsDestilados/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                    </Stack>
                </SafeAreaView>
            </CarrinhoProvider>
        </AuthProvider>
    )
}

function HeaderRight() {
    const { user, isLoggedIn, logout } = useAuth();
    const { getTotalCarrinho } = useCarrinho();
    const totalItemsCarrinho = getTotalCarrinho();

    const handleLogout = () => {
        logout();
        router.push('/');
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10 }}>
            {isLoggedIn && user ? (
                <>
                    <TouchableOpacity onPress={handleLogout}>
                        <FontAwesome5 name="sign-out-alt" size={20} color="#fff" />
                    </TouchableOpacity>
                </>
            ) : (
                <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                    <FontAwesome5 name="user-alt" size={20} color="#fff" />
                </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                {totalItemsCarrinho > 0 && (
                    <View style={{ position: 'absolute', right: -10, top: -10, backgroundColor: '#fff', borderRadius: 10, padding: 5 }}>
                        <Text style={{ color: '#560022', fontWeight: 'bold' }}>{totalItemsCarrinho}</Text>
                    </View>
                )}
            </TouchableOpacity>

        </View>
    );
}
