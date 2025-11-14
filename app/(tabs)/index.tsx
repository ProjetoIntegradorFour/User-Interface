import React, { useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import Carousel, { Book } from "@/components/Carousel";

export default function App() {
  const [loading, setLoading] = useState(false);

  const books: Book[] = [
    { id: "1", title: "O Senhor dos Anéis", image: "https://covers.openlibrary.org/b/isbn/9780261102385-L.jpg" },
    { id: "2", title: "Harry Potter e a Pedra Filosofal", image: "https://covers.openlibrary.org/b/isbn/9788532530821-L.jpg" },
    { id: "3", title: "O Pequeno Príncipe", image: "https://covers.openlibrary.org/b/isbn/9788522036198-L.jpg" },
    { id: "4", title: "1984", image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg" },
  ];

  const handleButtonPress = (title: string) => {
    console.log("Reservou", title);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#9C27B0" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9", paddingTop: 20 }}>
      <Carousel
        title="Livros Populares"
        data={books}
        renderButton={(book) => (
          <View
            style={{
              marginTop: 10,
              backgroundColor: "#007bff",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }} onPress={() => handleButtonPress(book.title)}>
              RENOVAR
            </Text>
          </View>
        )}
      />
    </View>
  );
}
