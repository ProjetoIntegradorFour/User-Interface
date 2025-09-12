import { useRouter } from 'expo-router';
import CustomButtonOutline from "@/components/CustomButtonOutline";
import Textfield from "@/components/textfield";
import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

export default function TabThreeScreen() {
  const router = useRouter();

  return (
  <View style={{ flex: 1, padding: 16 }}>
    <ThemedText>history</ThemedText>

    <Textfield placeholder="Usuário..." />
    <Textfield placeholder="Senha..." secureTextEntry />

    <CustomButtonOutline
      title="Ir para Login"
      onPress={() => router.push('/login')}
    />
  </View>
);

}
