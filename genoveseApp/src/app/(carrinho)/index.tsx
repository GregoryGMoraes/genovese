import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { useCarrinho } from './context/carrinhoContext';
import { FontAwesome5 } from "@expo/vector-icons";


export default function Carrinho() {
    const { carrinho, addAoCarrinho, removeDoCarrinho } = useCarrinho();

   
    if (carrinho.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Image source={require('../../../assets/images/cesta.png')} style={styles.emptyImage} />
                <Text style={styles.emptyText}>Carrinho vazio</Text>
            </View>
        );
    }

    const totalCarrinho = () => {
        return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0)
    };

    const enviarPedido = () => {
        if (carrinho.length === 0) {
            console.log("Carrinho vazio", "Adicione itens ao carrinho antes de enviar o pedido.");
            return;
        }

        const pedido = carrinho
            .map((item) => `- ${item.nome} - ${item.quantidade}: R$${(item.preco * item.quantidade).toFixed(2)}`)
            .join("\n");

        const total = `Total: R$${totalCarrinho().toFixed(2)}`;
        const mensagem = `Oi, gostaria de fazer o seguinte pedido:\n\n${pedido}\n\n${total}`;

        const numeroWhatsApp = "555381531860"; // Substitua pelo número do WhatsApp (com código do país)
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        Linking.openURL(url).catch(() => {
            console.log("Erro", "Não foi possível abrir o WhatsApp.");
        });
    };


    return (

        <View style={styles.container}>

            <FlatList
                data={carrinho}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.carrinhoContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Image source={{ uri: item.imagem }} style={{ width: 80, height: 80 }} />
                            <Text style={styles.text}>{item.nome}</Text>
                            <Text style={styles.text}>R${item.preco.toFixed(2)}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                <TouchableOpacity onPress={() => removeDoCarrinho(item.id)}>
                                    <FontAwesome5 name='minus' size={20} color='#550026' />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10 }}>{item.quantidade}</Text>
                                <TouchableOpacity onPress={() => addAoCarrinho(item)}>
                                    <FontAwesome5 name='plus' size={18} color='#550026' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )} />

            <View style={{ flexDirection: 'row', padding: 5 }}>
                <Text style={{ fontWeight: 'bold', color: '#550026', fontSize: 18 }}>Total: </Text>
                <Text style={{ fontWeight: 'bold', color: '#550026', fontSize: 18 }}>R${totalCarrinho().toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={enviarPedido}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.textBtn}>
                        Enviar Pedido
                    </Text>
                    <FontAwesome5 name='whatsapp' size={22} color='#fff' style={{ marginRight: 10 }} />
                </View>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },

    text: {
        fontSize: 16,
        marginBottom: 10,
        padding: 10,
    },

    carrinhoContainer: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2
    },


    btn: {
        width: '90%',
        height: 40,
        margin: 5,
        backgroundColor: "#560022",
        alignItems: 'center',
        borderRadius: 10
    },

    textBtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        alignItems: 'center',
        padding: 10
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    emptyImage: {
        width: 500,
        height: 500,
        resizeMode: 'contain',
    },
    emptyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#560022',
    }

})