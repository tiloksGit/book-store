import Book from "../Components/Book.jsx";
import "../styles/book.css";
import "../styles/deptstyle.css";
import { useContext, useEffect, useState } from "react";
import dataContext from "../dataContext";

const Cse = () => {
  const { books } = useContext(dataContext);
  const [eeBooks, setEeBooks] = useState("");

  useEffect(() => {
    if (books?.length) {
      const newBook = books.filter((book) => book.branch === "CSE");
      setEeBooks(newBook);
    }
  }, [books]);

  return (
    <div className="page">
      <h1>Computer Science Engineering Books Section</h1>
      {eeBooks?.length ? (
        <div className="book-container">
          {eeBooks.map((book, i) => (
            <div key={book._id} className="book">
              <Book
                id={book._id}
                object={book}
                bookName={book.title}
                author={book.author}
                src={book.imgURL}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="page">
          <h4>No books available currently</h4>
        </div>
      )}
    </div>
  );
};

export default Cse;
