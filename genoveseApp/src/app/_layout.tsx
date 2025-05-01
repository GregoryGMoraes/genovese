import { FontAwesome5 } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import { SafeAreaView, Text, StatusBar, TouchableOpacity, View } from 'react-native'
import { AuthProvider, useAuth } from './(auth)/context/authContext'
import { CarrinhoProvider } from './(carrinho)/context/carrinhoContext'

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

                        <Stack.Screen name="/(carrinho)/index" options={{
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
    const { user, isLoggedIn, logout } = useAuth(); // Acessa o contexto de autenticação

    const handleLogout = () => {
        logout(); // Chama a função de logout do contexto
        router.push('/'); // Redireciona para a tela inicial
    }
    return (
        // Renderiza o componente de cabeçalho direito com informações do usuário e ícones de navegação
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10 }}>
            {/* Se o usuário estiver logado, exibe o e-mail do usuário */}
            {isLoggedIn && user ? (
                <>
                    {/* <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>{user.name}</Text> */}
                    <TouchableOpacity onPress={handleLogout}>
                        <FontAwesome5 name="sign-out-alt" size={20} color="#fff" /> {/* Ícone de logout */}
                    </TouchableOpacity>
                </>
            ) : (
                <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                    <FontAwesome5 name="user-alt" size={20} color="#fff" />
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
            </TouchableOpacity>

        </View>
    );
}
