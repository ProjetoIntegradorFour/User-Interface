import CustomButton from "@/components/CustomButton";
import Textfield from "@/components/TextField1";
import axios from "axios";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        {
          cpf,
          password,
        }
      );

      const data = response.data;
      console.log("JWT Token:", data.accessToken);

      // Aqui você pode salvar o token no AsyncStorage para usar nas próximas chamadas da API
      // await AsyncStorage.setItem("token", data.accessToken);

      // Redireciona para a tela principal
      router.replace("/(tabs)/explore");
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("CPF ou senha inválidos");
    }
  };

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
          <Textfield
            placeholder="Usuário..."
            value={cpf}
            onChangeText={setCpf}
          />
          <Textfield
            placeholder="Senha..."
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <View style={styles.marge}>
          <CustomButton
            title="Entrar"
            variant="filled"
            color="#9C27B0"
            onPress={handleLogin}
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
  error: {
    color: "red",
    marginTop: 10,
    fontSize: 14,
  },
});
