import { useState, useContext, useEffect } from "react";
import "../styles/deptstyle.css";
import Book from "../Components/Book";
import "../styles/book.css";
import dataContext from "../dataContext";

const Ee = () => {
  const { books } = useContext(dataContext);
  const [eeBooks, setEeBooks] = useState("");

  useEffect(() => {
    if (books?.length) {
      const newBook = books.filter((book) => book.branch === "EE");
      setEeBooks(newBook);
    }
  }, []);

  return (
    <div className="page">
      <h1>Electrical Engineering Books Section</h1>
      {eeBooks?.length ? (
        <div className="book-container">
          {eeBooks.map((book) => (
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

export default Ee;
