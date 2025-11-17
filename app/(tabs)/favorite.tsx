import CustomButton from "@/components/CustomButton";
import Textfield from "@/components/textfield";
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function TabFiveScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ThemedText>history</ThemedText>

      <Textfield placeholder="Usuário..." />
      <Textfield placeholder="Senha..." secureTextEntry />
      <CustomButton
        title="Ir para Login"
        variant="outline"
        color="#007bff"
        onPress={() => router.push("./index")}
      />
    </View>
  );
}
