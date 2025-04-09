import { Stack } from 'expo-router'

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="welcome" options={{ title: "Home"}} />
            <Stack.Screen name="singIn" options={{ title: "Login"}} />
        </Stack>
    )
}

