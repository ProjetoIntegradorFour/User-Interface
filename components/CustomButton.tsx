import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = "primary",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "secondary" && styles.secondary]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={[styles.text, variant === "secondary" && styles.secondaryText]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: "#007bff",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
    alignSelf: "flex-start",
  },
  text: {
    color: "#007bff",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto-Medium",
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
