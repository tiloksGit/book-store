import "../styles/book.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import dataContext from "../dataContext";

const Book = ({ bookName, author, src, object }) => {
  const { setActiveSales } = useContext(dataContext);

  const navigate = useNavigate();

  const handleClick = (object) => {
    setActiveSales(object);
    navigate("/exclusive/buy");
  };

  return (
    <div className="book-card">
      <div className="img-container">
        <img src={src} alt={bookName} height="250" width="200" />
      </div>
      <ul>
        <li>
          <span style={{ fontWeight: "bold" }}>BookId</span>: {object._id}
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>BookName</span>: {bookName}
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Author</span>: {author}
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Claimed Price</span>:{" "}
          {object.expecPrice}
        </li>
      </ul>
      {/* <Link to="/exclusive/buy">Buy</Link> */}
      <button onClick={() => handleClick(object)}>BUY</button>
    </div>
  );
};

export default Book;
