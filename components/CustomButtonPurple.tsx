import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, variant = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "secondary" && styles.secondary]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, variant === "secondary" && styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 35,
    backgroundColor: "#9C27B0",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondary: {
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  secondaryText: {
    color: "#000000ff",
  },
});

export default CustomButton;
