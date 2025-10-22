import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CardBook from "@/components/CardBook";
import api from "@/services/api";

export default function History() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
  const mockBooks = [
    {
      id: 1,
      title: "Percy Jackson e o Ladrão de Raios",
      author: "Rick Riordan",
      isbn: "9788598078355",
      due_date: "2025-08-22",
      status: "ok",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      isbn: "9788535909555",
      due_date: "2025-07-10",
      status: "late",
    },
  ];
  setBooks(mockBooks);
}, []);


  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f9f9f9", paddingTop: 50 }}>
      {books.map((book) => (
        <CardBook
          key={book.id}
          title={book.title}
          author={book.author}
          isbn={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
          dueDate={book.due_date}
          status={book.status}
          onRenew={() => console.log(`Renovar ${book.title}`)}
        />
      ))}
    </ScrollView>
  );
}
