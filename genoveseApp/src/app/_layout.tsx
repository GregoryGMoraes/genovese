import { Stack } from 'expo-router'
import { SafeAreaView, StatusBar } from 'react-native'
import { AuthProvider } from './(auth)/context/authContext'
import { CartProvider } from './(carrinho)/context/carrinhoContext'
import  HeaderRight from './components/headerRight';

export default function Layout() {
    return (
        <AuthProvider>
            <CartProvider>
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

                        <Stack.Screen name="(vinhos)/flatItemsWine/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Vinhos',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(vinhos)/wineDetails/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(espumantes)/flatItemsSparkling/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Espumantess',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(espumantes)/sparklingDetails/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(pescados)/flatItemsFish/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Pescados',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff', headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(pescados)/fishDetails/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(chocolates)/flatItemsChocolate/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Chocolates',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(chocolates)/chocolateDetails/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(frios)/flatItemsCold/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Queijos',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(frios)/coldDetails/[id]" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Detalhes',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff', headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(destilados)/flatItemsDistilled/index" options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Destilados',
                            headerStyle: { backgroundColor: '#560022' },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <HeaderRight />
                            )
                        }} />

                        <Stack.Screen name="(destilados)/distilledDetails/[id]" options={{
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
            </CartProvider>
        </AuthProvider>
    )
}

// Adicionar o gitmoji no projeto para melhorar a experiência do usuário e deixar o projeto mais bonito

// Ajustar o botão de logout para que quando dentro do carrinho, ele não redirecione para a tela inicial.
   // Pois está ficando dentro do carrinho e não está voltando para a tela inicial.

// Padronizar os estilos de cada tela, para que fiquem todos iguais e com a mesma paleta de cores
    // Criar um arquivo de estilos global para o projeto, para que não fique repetindo os mesmos estilos em todas as telas
   
// Adicionar uma barrra de pequise no components para que o usuário possa pesquisar os produtos

// Async storage para pesisar os dados do usuário     

// Gerar APK do projeto para android e IOS 