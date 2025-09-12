import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import Carousel from "@/components/Carousel";
import CustomButton from "@/components/CustomButton";

const books = [
  { id: "1", title: "Livro A", image: "https://placehold.co/300x400" },
  { id: "2", title: "Livro B", image: "https://placehold.co/200x400" },
  { id: "3", title: "Livro C", image: "https://placehold.co/400x400" },
  { id: "4", title: "Livro D", image: "https://placehold.co/500x400" },
  { id: "5", title: "Livro E", image: "https://placehold.co/100x400" },
];

export default function TabFourScreen() {
  return (
    <ThemedText>
      <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
        <Carousel
          title="📚 Livros Novos"
          data={books}
          renderButton={(book) => (
            <CustomButton
              title="Ver mais"
              onPress={() => console.log("Clicou em", book.title)}
            />
          )}
        />
      </View>
    </ThemedText>
  );
}
