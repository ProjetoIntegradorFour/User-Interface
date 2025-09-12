import CustomButtonPurple from "@/components/CustomButtonPurple";
import Textfield from "@/components/textfield";
import { useFonts } from 'expo-font';
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default function Login() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("assets/fonts/Roboto-Bold.ttf"),
    "RacingSansOne-Regular": require("assets/fonts/RacingSansOne-Regular.ttf"),
  });

  return (
//assets\images\logo.png
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Image
          source={require("assets/images/logo.png")}
          style={styles.logoImg}
          resizeMode="contain"
        />
        <Text style={styles.logo}>SENAI</Text>

        <Textfield  placeholder="Usuário..."/>
        <Textfield placeholder="Senha..." secureTextEntry />

        <Text style={styles.campo}>Tela de Login</Text>
        <CustomButtonPurple
          title="Entrar"
          onPress={() => router.push("/")} // leva direto para as tabs
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
  },
  rectangle: {
    backgroundColor: "#8BC34A",
    width: "80%",
    padding: 25,
    borderRadius: 10,
    height: "60%",
    alignItems: "center",
  },

  logo: {
    fontFamily: "RacingSansOne-Regular",
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },
  campo: {
    fontFamily: "RacingSansOne-Regular",
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },
  logoImg: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },

});
