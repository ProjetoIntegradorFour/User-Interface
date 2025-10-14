import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  variant?: "outline" | "filled"; // define o tipo do botão
  color?: string; // cor principal (padrão azul/roxo)
  onPress: () => void;
};

export default function CustomButton({
  title,
  variant = "outline",
  color = "#007bff", // azul padrão
  onPress,
}: ButtonProps) {
  const isFilled = variant === "filled";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isFilled ? color : "#fff",
          borderColor: color,
          borderWidth: isFilled ? 0 : 2,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: isFilled ? "#fff" : color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 100,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
  },
});
