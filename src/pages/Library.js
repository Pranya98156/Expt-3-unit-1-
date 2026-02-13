import { useState } from "react";
import "./pages.css";

function Library() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  // ADD BOOK
  const addBook = () => {
    if (title === "" || author === "") return;

    setBooks([
      ...books,
      { id: Date.now(), title, author },
    ]);

    setTitle("");
    setAuthor("");
  };

  // REMOVE BOOK
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // SEARCH FILTER
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Library Management System</h1>

      {/* Search */}
      <input
        placeholder="Search book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Book */}
      <div>
        <input
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {/* Book List */}
      {filteredBooks.map((book) => (
        <div key={book.id} className="card">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <button className="remove" onClick={() => removeBook(book.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Library;
