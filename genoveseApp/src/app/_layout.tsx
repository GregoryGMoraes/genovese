import { Stack } from 'expo-router'

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="flatItemsVinhos/index" options={{headerTitleAlign: 'center', headerTitle: 'Vinhos', headerTintColor: '#560022'}}/>
            <Stack.Screen name="detailsVinhos/[id]" options={{headerTitleAlign: 'center', headerTitle: 'Detalhes', headerTintColor: '#560022'}}/>
            <Stack.Screen name="flatItemsPescados/index" options={{headerTitleAlign: 'center', headerTitle: 'Pescados' }}/>
            <Stack.Screen name="detailsPescados/[id]" options={{headerTitleAlign: 'center', headerTitle: 'Detalhes', headerTintColor: '#560022'}}/>
            <Stack.Screen name="flatItemsChocolates/index" options={{headerTitleAlign: 'center', headerTitle: 'Chocolates'}}/>
            <Stack.Screen name="detailsChocolates/[id]" options={{headerTitleAlign: 'center', headerTitle: 'Detalhes', headerTintColor: '#560022'}}/>
            <Stack.Screen name="flatItemsQueijos/index" options={{headerTitleAlign: 'center', headerTitle: 'Queijos'}}/>
            <Stack.Screen name="detailsQueijos/[id]" options={{headerTitleAlign: 'center', headerTitle: 'Detalhes', headerTintColor: '#560022'}}/>
            <Stack.Screen name="flatItemsDestilados/index" options={{headerTitleAlign: 'center', headerTitle: 'Destilados'}}/>
            <Stack.Screen name="detailsDestilados/[id]" options={{headerTitleAlign: 'center', headerTitle: 'Detalhes', headerTintColor: '#560022'}}/>
        </Stack>
    )
}

