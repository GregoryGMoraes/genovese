import { FontAwesome5 } from '@expo/vector-icons'
import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAuth } from '../../../context/authContext'
import { useCart } from '../../../context/carrinhoContext'


export default function HeaderRight() {
    const { user, isLoggedIn, logout } = useAuth();
    const { getTotalCart } = useCart();
    const totalItemsCart = getTotalCart();

    const handleLogout = () => {
        logout();
        router.replace('/');
    }

    const handleCartPress = () => {
        if (!isLoggedIn) {
            router.push('/(auth)/modals/singIn');
            return;
        }
        router.push('/(carrinho)');
    }

    return (
        <View style={styles.container}>

            { user ? (
                <>
                    <TouchableOpacity onPress={handleLogout}>
                        <FontAwesome5 name="sign-out-alt" size={20} color="#fff" />
                    </TouchableOpacity>
                </>
            ) : (
                <TouchableOpacity onPress={() => router.push('../(auth)/modals/singIn')}>
                    <FontAwesome5 name="user-alt" size={20} color="#fff" />
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handleCartPress}>
                <FontAwesome5 name="shopping-basket" size={20} color="#fff" />
                {totalItemsCart > 0 && (
                    <View style={styles.totalItemsContainer}>
                        <Text style={styles.totalItemsText}>{totalItemsCart}</Text>
                    </View>
                )}
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingRight: 16, 
    gap: 10, 
    marginRight: 30

},

  totalItemsContainer: {
    position: 'absolute', 
    right: -10, 
    top: -10, 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    padding: 5
  },

  totalItemsText:{
    color: '#560022', 
    fontWeight: 'bold' 
  }

});