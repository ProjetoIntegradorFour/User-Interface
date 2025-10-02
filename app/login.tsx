import Textfield from "@/components/textfield";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";

export default function Login() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("assets/fonts/Roboto-Bold.ttf"),
    "RacingSansOne-Regular": require("assets/fonts/RacingSansOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando fontes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Image
          source={require("assets/images/logo.png")}
          style={styles.logoImg}
          resizeMode="contain"
        />
        <Text style={styles.logo}>SENAI</Text>

        <View style={styles.inputGroup}>
          <Textfield placeholder="Usuário..." />
          <Textfield placeholder="Senha..." secureTextEntry />
        </View>

        <View style={styles.marge}>
          <CustomButton
            title="Entrar"
            variant="filled"
            color="#8000ff"
            onPress={() => router.replace("/(tabs)/explore")}
          />
        </View>
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
    width: "90%",
    paddingTop: 20,
    padding: 40,
    borderRadius: 10,
    height: "55%",
    alignItems: "center",
  },
  logo: {
    fontFamily: "RacingSansOne-Regular",
    top: 0,
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },
  inputGroup: {
    width: "100%",
    marginTop: 20,
    bottom: 0,
  },
  marge: {
    marginTop: 30,
  },
  campo: {
    fontFamily: "RacingSansOne-Regular",
    fontSize: 20,
    color: "#FFF",
    marginTop: 15,
  },
  logoImg: {
    width: 70,
    height: 70,
  },
});
