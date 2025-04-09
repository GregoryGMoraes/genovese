import { View, Text, StyleSheet } from 'react-native'

interface Props {
    name: string;
}

export function Section({ name }: Props) {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 16
            }}>
                {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },


});


