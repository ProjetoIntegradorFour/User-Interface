import Carousel from "@/components/Carousel";
import CustomButton from "@/components/CustomButton";
import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

const books = [
  {
    id: "1",
    title: "Memórias Póstumas",
    image: "https://openlibrary.org/search.json",
  },
  { id: "2", title: "Jogos Vorazes", image: "https://placehold.co/200x300" },
  {
    id: "3",
    title: "O Amor Não é Óbvio",
    image: "https://placehold.co/200x300",
  },
  {
    id: "4",
    title: "Na Ponta dos Dedos",
    image: "https://placehold.co/200x300",
  },
  {
    id: "4",
    title: "Five Nights at Freddy's",
    image: "https://placehold.co/200x300",
  },
];

export default function App() {
  return (
    <ThemedText>
      <View style={{ flex: 1, backgroundColor: "#f9f9f9", paddingTop: 50 }}>
        <Carousel
          title="Livros Populares"
          data={books}
          renderButton={(book) => (
            <CustomButton
              title="RESERVAR"
              onPress={() => console.log("Reservou", book.title)}
            />
          )}
        />
        <Carousel
          title="Novidades"
          data={books}
          renderButton={(book) => (
            <CustomButton
              title="RESERVAR"
              onPress={() => console.log("Reservou", book.title)}
            />
          )}
        />
      </View>
    </ThemedText>
  );
}
