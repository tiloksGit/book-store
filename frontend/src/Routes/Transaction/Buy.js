import { useContext, useState } from "react";
import dataContext from "../../dataContext";
import apiResponse from "../../app/api/apiSlice";

const Buy = ({}) => {
  const {
    userName,
    accessToken,
    activeSales,
    FontAwesomeIcon,
    faSpinner,
    setLoadBook,
  } = useContext(dataContext);
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();

  const sellBook = async () => {
    setLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        username: userName,
        bookId: activeSales._id,
        email,
        contact,
      }),
    };
    try {
      const response = await apiResponse(
        "http://localhost:4000/sendmail",
        options
      );
      if (response) {
        const result = await response.json();
        setRes(result.message);
      }
    } catch (err) {
      setLoading(false);
      alert(`Error: ${err.message}....please reload the page`);
    } finally {
      setLoading(false);
      setLoadBook(true);
    }
  };
  return (
    <div className="uploads-container">
      {res ? (
        <div>{res}</div>
      ) : (
        <div className="myUploads">
          <img
            src={activeSales.imgURL}
            alt={activeSales.title}
            height="200"
            width="200"
          />
          <br />
          Book Title: {activeSales.title}
          <br />
          Author: {activeSales.author}
          <br />
          Price: {activeSales.expecPrice}
          <br />
          Book Available: {activeSales.available ? "Yes" : "No"}
          <br />
          <form>
            <label for="contact">Contact Number :</label>
            <input
              id="contact"
              type="number"
              placeholder="+91 ..."
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label for="email">Verify your Email :</label>
            <input
              id="email"
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <div className="sales-btn-container">
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <button onClick={sellBook}>confirm buy</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Buy;
