import { FontAwesome5 } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import { TouchableOpacity, View } from 'react-native'

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Genovese Vinhos',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 10 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Stack.Screen name="/(carrinho)/index" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Carrinho',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Stack.Screen name="(home)/index" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Genovese Vinhos',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Stack.Screen name="(auth)/modals/singIn/index" options={{ presentation: 'modal', headerShown: false }} />

            <Stack.Screen name="(vinhos)/flatItemsVinhos/index" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Vinhos',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />

            <Stack.Screen name="(vinhos)/detailsVinhos/[id]" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Detalhes',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />

            <Stack.Screen name="(espumantes)/flatItemsEspumantes/index" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Espumantess',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />

            <Stack.Screen name="(espumantes)/detailsEspumantes/[id]" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Detalhes',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />

            <Stack.Screen name="(pescados)/flatItemsPescados/index" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Pescados',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff', headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />

            <Stack.Screen name="(pescados)/detailsPescados/[id]" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Detalhes',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Stack.Screen name="(chocolates)/flatItemsChocolates/index" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Chocolates',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Stack.Screen name="(chocolates)/detailsChocolates/[id]" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Detalhes',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Stack.Screen name="(frios)/flatItemsFrios/index" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Queijos',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Stack.Screen name="(frios)/detailsFrios/[id]" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Detalhes',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff', headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Stack.Screen name="(destilados)/flatItemsDestilados/index" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Destilados',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Stack.Screen name="(destilados)/detailsDestilados/[id]" options={{
                headerTitleAlign: 'center',
                headerTitle: 'Detalhes',
                headerStyle: { backgroundColor: '#560022' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', gap: 15, marginRight: 15 }}>
                        <TouchableOpacity onPress={() => router.push('/(auth)/modals/singIn')}>
                            <FontAwesome5 name="user-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(carrinho)')}>
                            <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )
            }} />

        </Stack>
    )
}

