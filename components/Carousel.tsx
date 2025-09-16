import React, { useRef, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

interface Book {
  id: string;
  title: string;
  image: string;
}

interface CarouselProps {
  title: string;
  data: Book[];
  renderButton: (book: Book) => React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ title, data, renderButton }) => {
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (index >= 0 && index < data.length) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
      setCurrentIndex(index);
    }
  };

  return (
    <View style={{ marginVertical: 20 }}>
      {/* título */}
      <Text style={styles.title}>{title}</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* seta esquerda */}
        <TouchableOpacity onPress={() => scrollToIndex(currentIndex - 1)}>
          <Ionicons name="chevron-back-circle" size={36} color="#a020f0" />
        </TouchableOpacity>

        {/* lista */}
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              {renderButton(item)}
            </View>
          )}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x / (width * 0.45 + 20)
            );
            setCurrentIndex(index);
          }}
        />

        {/* seta direita */}
        <TouchableOpacity onPress={() => scrollToIndex(currentIndex + 1)}>
          <Ionicons name="chevron-forward-circle" size={36} color="#a020f0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#a020f0",
    marginLeft: 10,
    marginBottom: 10,
  },
  card: {
    width: width * 0.45,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 6,
    marginBottom: 10,
    resizeMode: "cover",
  },
});

export default Carousel;
