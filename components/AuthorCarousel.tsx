import { useEffect, useRef } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Author = {
  id: string;
  name: string;
  image: string;
};

type Props = {
  title?: string;
  authors: Author[];
  scrollSpeed?: number;
  onAuthorPress?: (author: Author) => void;
};

const ITEM_WIDTH = 110;
const ITEM_MARGIN_HORIZONTAL = 5;
const ITEM_FULL_WIDTH = ITEM_WIDTH + ITEM_MARGIN_HORIZONTAL * 2;

export default function AuthorCarousel({
  title = "Autores",
  authors,
  scrollSpeed = 0.2,
  onAuthorPress,
}: Props) {
  const listRef = useRef<FlatList<any>>(null);

  const loopData = [...authors, ...authors, ...authors];

  useEffect(() => {
    if (!authors.length) return;

    let offset = authors.length * ITEM_FULL_WIDTH;

    // ✅ delay necessário no web e mobile
    const startTimer = setTimeout(() => {
      listRef.current?.scrollToOffset({
        offset,
        animated: false,
      });

      const interval = setInterval(() => {
        offset += scrollSpeed * 4;

        listRef.current?.scrollToOffset({
          offset,
          animated: false,
        });

        const totalWidth = ITEM_FULL_WIDTH * loopData.length;

        // soft reset
        if (offset >= totalWidth - ITEM_FULL_WIDTH * authors.length) {
          offset = authors.length * ITEM_FULL_WIDTH;
          listRef.current?.scrollToOffset({
            offset,
            animated: false,
          });
        }
      }, 16);

      return () => clearInterval(interval);
    }, 500); // tempo pra lista renderizar

    return () => clearTimeout(startTimer);
  }, [authors, scrollSpeed]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        ref={listRef}
        data={loopData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id + "-" + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => onAuthorPress?.(item)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text numberOfLines={1} style={styles.name}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        scrollEnabled={true}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20, paddingHorizontal: 20 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9C27B0",
    marginLeft: -9,
    marginBottom: 10,
  },
  item: {
    width: ITEM_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: ITEM_MARGIN_HORIZONTAL,
  },
  image: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: "#eee",
    marginBottom: 6,
  },
  name: { fontSize: 13, textAlign: "center", width: ITEM_WIDTH - 10 },
});
