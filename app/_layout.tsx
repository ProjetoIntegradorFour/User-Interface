import { ThemeProvider, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "@/styles/globals.css";
import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require('assets/fonts/SpaceMono-Regular.ttf'),
    "Roboto-Medium": require("assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("assets/fonts/Roboto-Bold.ttf"),
    "RacingSansOne-Regular": require("assets/fonts/RacingSansOne-Regular.ttf"),
  });

  // Bloqueia renderização até as fontes carregarem
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={theme}>
      <Stack>
        {/* Tela inicial (login) */}
        <Stack.Screen name="login" options={{ headerShown: false }} />

        {/* Tabs só aparecem depois do login */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
