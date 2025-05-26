import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { useCart } from '../../context/carrinhoContext';
import { FontAwesome5 } from "@expo/vector-icons";


export default function Carrinho() {
    const { cart, addToCart, removeToCart } = useCart();


    if (cart.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Image source={require('../../../assets/images/cesta.png')} style={styles.emptyImage} />
                <Text style={styles.emptyText}>Carrinho vazio</Text>
            </View>
        );
    }

    const totalCart = () => {
        return cart.reduce((total, item) => total + item.price * item.quant, 0)
    };

    const sendOrder = () => {
        if (cart.length === 0) {
            console.log("Carrinho vazio", "Adicione itens ao carrinho antes de enviar o pedido.");
            return;
        }

        const order = cart
            .map((item) => `- ${item.name} - ${item.quant}: R$${(item.price * item.quant).toFixed(2)}`)
            .join("\n");

        const total = `Total: R$${totalCart().toFixed(2)}`;
        const message = `Oi, gostaria de fazer o seguinte pedido:\n\n${order}\n\n${total}`;

        const numberWhatsApp = "555381531860";
        const url = `https://wa.me/${numberWhatsApp}?text=${encodeURIComponent(message)}`;

        Linking.openURL(url).catch(() => {
            console.log("Erro", "Não foi possível abrir o WhatsApp.");
        });
    };


    return (

        <View style={styles.container}>

            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.carrinhoContainer}>
                        <View style={styles.cardContainer}>
                            <Image source={{ uri: item.image }} style={styles.cardImage} />
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>R${item.price.toFixed(2)}</Text>
                            <View style={styles.btnCard}>
                                <TouchableOpacity onPress={() => removeToCart(item.id)}>
                                    <FontAwesome5 name='minus' size={20} color='#550026' />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10 }}>{item.quant}</Text>
                                <TouchableOpacity onPress={() => addToCart(item)}>
                                    <FontAwesome5 name='plus' size={18} color='#550026' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )} />

            <View style={styles.totalContainer}>
                <Text style={styles.textTotal}>Total: R${totalCart().toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.btnSendOrder} onPress={sendOrder}>
                <View style={styles.sendOrderContainer}>
                    <Text style={styles.textBtn}>
                        Enviar Pedido
                    </Text>
                    <FontAwesome5 name='whatsapp' size={22} color='#fff' />
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
        gap: 10,
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

    cardContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    },

    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 10, 
        resizeMode: 'contain',
    },

    totalContainer : {
        flexDirection: 'row', 
        padding: 5
    },

    textTotal: {
        fontWeight: 'bold',
        color: '#550026',
        fontSize: 18
    },

    sendOrderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnSendOrder: {
        width: '90%',
        height: 40,
        margin: 5,
        backgroundColor: "#560022",
        alignItems: 'center',
        borderRadius: 10
    },

    btnCard: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 10 
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