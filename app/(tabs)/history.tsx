import CardBook from "components/CardBook";
import React from "react";
import { ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f9f9f9", paddingTop: 50 }}>
      <CardBook
        title="O Ladrão de Raios"
        author="Rick Riordan"
        cover="https://covers.openlibrary.org/b/id/10521209-L.jpg"
        dueDate="22/08/2025"
        status="ok"
        onRenew={() => console.log("Renovar Ladrão de Raios")}
      />

      <CardBook
        title="Uma Odisseia no Espaço"
        author="Arthur Clarke"
        cover="https://covers.openlibrary.org/b/id/11153268-L.jpg"
        dueDate="09/07/2025"
        status="late"
        onRenew={() => console.log("Renovar Odisseia")}
      />
    </ScrollView>
  );
}
