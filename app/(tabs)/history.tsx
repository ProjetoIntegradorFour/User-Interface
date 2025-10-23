import CardBook from "@/components/CardBook";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function History() {
  const [books, setBooks] = useState<any[]>([]);

  //puxar os livros do db, mas ainda não tem um db
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await api.get("/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    }

    fetchBooks();
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
