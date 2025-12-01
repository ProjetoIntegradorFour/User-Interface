import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation() as any;

  const BYPASS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0Iiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTc2MDQ4ODUzOCwiZXhwIjoxNzYwNTc0OTM4fQ.D3lsMpGlZ3VkDGHne-G0tV2-HRlauWmU87hmFC01v5U";
  const BYPASS_ROLE = "ADMIN";

  const handleSaveToken = async () => {
    await AsyncStorage.setItem("token", BYPASS_TOKEN);
    await AsyncStorage.setItem("role", BYPASS_ROLE);

    Alert.alert(
      "Token salvo!",
      `Token e role salvos com sucesso!\n\nToken: ${BYPASS_TOKEN}\nRole: ${BYPASS_ROLE}`
    );
  };

  useEffect(() => {
    const loadStoredData = async () => {
      const savedToken = await AsyncStorage.getItem("token");
      const savedRole = await AsyncStorage.getItem("role");

      if (savedToken && savedRole) {
        console.log("Token já salvo:", savedToken);
        console.log("Role já salvo:", savedRole);
      }
    };

    loadStoredData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Bypass para Testes</Text>
      <Text style={styles.subtitle}>
        Esta página é apenas para testes de desenvolvimento
      </Text>

      <View style={styles.card}>
        <TouchableOpacity onPress={handleSaveToken} style={styles.button}>
          <Text style={styles.buttonText}>Salvar Token e Role</Text>
        </TouchableOpacity>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={[styles.button, styles.secondaryButton]}
          >
            <Text style={styles.buttonText}>Ir para Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Dashboard")}
            style={[styles.button, styles.secondaryButton]}
          >
            <Text style={styles.buttonText}>Ir para Dashboard</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: "bold" }}>Token:</Text>{" "}
            {BYPASS_TOKEN.substring(0, 30)}...
          </Text>

          <Text style={styles.infoText}>
            <Text style={{ fontWeight: "bold" }}>Role:</Text> {BYPASS_ROLE}
          </Text>
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
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 30,
    width: "100%",
    maxWidth: 500,
    elevation: 4,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonGroup: {
    marginTop: 20,
    gap: 10,
  },
  info: {
    backgroundColor: "#f8f9fa",
    marginTop: 25,
    padding: 15,
    borderRadius: 4,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
});
