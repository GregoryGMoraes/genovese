import { Stack } from 'expo-router'

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="(vinhos)/flatItemsVinhos/index" options={{headerTitleAlign: 'center', headerTitle: 'Vinhos', headerStyle: {backgroundColor:'#560022'}, headerTintColor: '#fff'}}/>
            <Stack.Screen name="(vinhos)/detailsVinhos/[id]" options={{headerTitleAlign: 'center', headerTitle: 'Detalhes', headerStyle: {backgroundColor:'#560022'}, headerTintColor: '#fff'}}/>
            <Stack.Screen name="(pescados)/flatItemsPescados/index" options={{headerTitleAlign: 'center', headerTitle: 'Pescados', headerStyle: {backgroundColor:'#560022'}, headerTintColor: '#fff' }}/>
            <Stack.Screen name="(pescados)/detailsPescados/[id]" options={{headerTitleAlign: 'center', headerTitle: 'Detalhes', headerStyle: {backgroundColor:'#560022'}, headerTintColor: '#fff'}}/>
            <Stack.Screen name="(chocolates)/flatItemsChocolates/index" options={{headerTitleAlign: 'center', headerTitle: 'Chocolates', headerStyle: {backgroundColor:'#560022'}, headerTintColor: '#fff'}}/>
            <Stack.Screen name="(chocolates)/detailsChocolates/[id]" options={{headerTitleAlign: 'center', headerTitle: 'Detalhes', headerStyle: {backgroundColor:'#560022'}, headerTintColor: '#fff'}}/>
            <Stack.Screen name="(queijos)/flatItemsQueijos/index" options={{headerTitleAlign: 'center', headerTitle: 'Queijos', headerStyle: {backgroundColor:'#560022'}, headerTintColor: '#fff'}}/>
            <Stack.Screen name="(queijos)/detailsQueijos/[id]" options={{headerTitleAlign: 'center', headerTitle: 'Detalhes', headerStyle: {backgroundColor:'#560022'}, headerTintColor: '#fff'}}/>
            <Stack.Screen name="(destilados)/flatItemsDestilados/index" options={{headerTitleAlign: 'center', headerTitle: 'Destilados', headerStyle: {backgroundColor:'#560022'}, headerTintColor: '#fff'}}/>
            <Stack.Screen name="(destilados)/detailsDestilados/[id]" options={{headerTitleAlign: 'center', headerTitle: 'Detalhes', headerStyle: {backgroundColor:'#560022'}, headerTintColor: '#fff'}}/>
        </Stack>
    )
}

