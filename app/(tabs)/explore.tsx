import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Explore() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.row}>
          <Ionicons
            name="menu-outline"
            size={32}
            color="#9C27B0"
            style={{ marginLeft: 10 }}
          />

          <View style={styles.searchBox}>
            <TextInput
              placeholder="pesquise aqui..."
              placeholderTextColor="#9C27B0"
              style={styles.input}
            />
            <Ionicons
              name="search-outline"
              size={20}
              color="#9C27B0"
              style={styles.searchIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#9C27B0",
    borderRadius: 12,
    marginLeft: 10,
    paddingHorizontal: 12,
    right: 10,
    left: 10,
    height: 35,
    width: "80%",
  },
  headerBox: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",

    // sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    // sombra Android
    elevation: 4,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  searchIcon: {
    marginLeft: 6,
  },
});
