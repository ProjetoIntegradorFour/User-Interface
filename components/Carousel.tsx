import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";

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
      <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10, marginBottom: 10 }}>
        {title}
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* seta esquerda */}
        <TouchableOpacity onPress={() => scrollToIndex(currentIndex - 1)}>
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>

        {/* lista de livros */}
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ width: width * 0.3, marginHorizontal: 8 }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: "100%",
                  height: 160,
                  borderRadius: 6,
                  marginBottom: 6,
                  resizeMode: "cover",
                }}
              />
              <Text style={{ fontWeight: "600", marginBottom: 5 }}>{item.title}</Text>
              {renderButton(item)} {/* botão que você passa */}
            </View>
          )}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x / (width * 0.6 + 20)
            );
            setCurrentIndex(index);
          }}
        />

        {/* seta direita */}
        <TouchableOpacity onPress={() => scrollToIndex(currentIndex + 1)}>
          <Ionicons name="chevron-forward" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Carousel;
