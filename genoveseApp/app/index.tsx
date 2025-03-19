import { Button, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Seja Bem-Vindo ao App.</Text>
      <TextInput style={styles.input} placeholder="Digite seu e-mail"></TextInput>
      <TextInput style={styles.input} placeholder="Digite seu senha"></TextInput>
      <View style={styles.viewBtn}>

      <Button 
      //onPress={}
      title="Entrar"
      color="#560022"
      accessibilityLabel="Botão para entrar no app"
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },

  input: {
    width: "95%",
    height: 50,
    backgroundColor: "#a4b2e2",
    marginTop: 5,
  },

  viewBtn: {
    marginTop: 5,
    width: "95%",
    height: 50,
  }
  
});

