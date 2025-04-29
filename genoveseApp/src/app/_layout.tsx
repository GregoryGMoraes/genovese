import { FontAwesome5 } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import { SafeAreaView, Text, StatusBar, TouchableOpacity, View } from 'react-native'
import { AuthProvider, useAuth } from './(auth)/context/authContext'

export default function Layout() {
    return (

        // O AuthProvider envolve toda a aplicação, permitindo o acesso ao contexto de autenticação
        // em qualquer parte do aplicativo. Isso é útil para gerenciar o estado de autenticação
        // e fornecer informações sobre o usuário logado ou não.
        <AuthProvider>

            {/* StatusBar para personalizar a barra de status do dispositivo */}
            <StatusBar backgroundColor="#560022" barStyle="light-content" />

            {/* SafeAreaView para evitar sobreposição de conteúdo com a barra de status */}
            <SafeAreaView style={{ flex: 1 }}>

                {/* Stack para gerenciar as rotas da aplicação */}
                <Stack>
                    {/* Chamado da rota principal */}
                    <Stack.Screen name="index" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Genovese Vinhos',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de login */}
                    <Stack.Screen name="(auth)/modals/singIn/index" options={{ presentation: 'modal', headerShown: false }} />

                    {/* Chamado da rota de carrinho */}
                    <Stack.Screen name="/(carrinho)/index" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Carrinho',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota da home page */}
                    <Stack.Screen name="(home)/index" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Genovese Vinhos',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de lista de vinhos */}
                    <Stack.Screen name="(vinhos)/flatItemsVinhos/index" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Vinhos',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de detalhes do vinho */}
                    <Stack.Screen name="(vinhos)/detailsVinhos/[id]" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Detalhes',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de lista de espumantes */}
                    <Stack.Screen name="(espumantes)/flatItemsEspumantes/index" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Espumantess',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de detalhes do espumante */}
                    <Stack.Screen name="(espumantes)/detailsEspumantes/[id]" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Detalhes',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de lista de pescados */}
                    <Stack.Screen name="(pescados)/flatItemsPescados/index" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Pescados',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff', headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de detalhes do pescado */}
                    <Stack.Screen name="(pescados)/detailsPescados/[id]" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Detalhes',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de lista de chocolates */}
                    <Stack.Screen name="(chocolates)/flatItemsChocolates/index" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Chocolates',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de detalhes do chocolate */}
                    <Stack.Screen name="(chocolates)/detailsChocolates/[id]" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Detalhes',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de lista de frios */}
                    <Stack.Screen name="(frios)/flatItemsFrios/index" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Queijos',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de detalhes de frios */}
                    <Stack.Screen name="(frios)/detailsFrios/[id]" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Detalhes',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff', headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de lista de destilados */}
                    <Stack.Screen name="(destilados)/flatItemsDestilados/index" options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Destilados',
                        headerStyle: { backgroundColor: '#560022' },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <HeaderRight />
                        )
                    }} />

                    {/* Chamado da rota de detalhes do destilado */}
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
        // Se o usuário estiver logado, exibe o e-mail do usuário
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10 }}>
            {isLoggedIn && user ? (
                <>
                    <Text style={{ color: '#fff', fontSize: 14, marginRight: 10 }}>{user.email}</Text>
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
