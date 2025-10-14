import React from "react";
import { View, StyleSheet } from "react-native";

interface StatusCodeProps {
  color?: string;
}

const StatusCode: React.FC<StatusCodeProps> = ({ color = "green" }) => {
  return <View style={[styles.dot, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 6,
  },
});

export default StatusCode;
