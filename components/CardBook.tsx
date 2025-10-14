import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import StatusCode from "./StatusCode";

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  dueDate: string;
  status: "ok" | "late";
  onRenew: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  cover,
  dueDate,
  status,
  onRenew,
}) => {
  const isLate = status === "late";

  return (
    <View style={styles.card}>
      <Image source={{ uri: cover }} style={styles.image} />

      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <StatusCode color={isLate ? "red" : "green"} />
        </View>
        <Text style={styles.author}>{author}</Text>
        <Text style={[styles.dueDate, isLate && styles.dueLate]}>
          {isLate ? "Devolução atrasada" : "Devolução até " + dueDate}
        </Text>
      </View>
      <CustomButton
        title="RENOVAR"
        variant="outline"
        color="#007bff"
        onPress={onRenew}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#a020f0",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 90,
    borderRadius: 6,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    flexShrink: 1,
  },
  author: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },
  dueDate: {
    fontSize: 12,
    color: "#333",
  },
  dueLate: {
    color: "red",
    fontWeight: "600",
  },
});

export default BookCard;
