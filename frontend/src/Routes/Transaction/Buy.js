import { useContext, useState } from "react";
import dataContext from "../../dataContext";
import apiResponse from "../../app/api/apiSlice";

const Buy = ({}) => {
  const { userName, accessToken, activeSales, FontAwesomeIcon, faSpinner } =
    useContext(dataContext);
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);

  const sellBook = async () => {
    setLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ username: userName, bookId: activeSales._id }),
    };
    try {
      const response = await apiResponse(
        "https://bookstore-backend-kt7c.onrender.com/sendmail",
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
    }
  };
  return (
    <>
      {res ? (
        <div>{res}</div>
      ) : (
        <>
          <img src={activeSales.imgURL} alt={activeSales.title} />
          <br />
          Book Title: {activeSales.title}
          <br />
          Author: {activeSales.author}
          <br />
          Price: {activeSales.expecPrice}
          <br />
          <div className="status">
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <button onClick={sellBook}>confirm buy</button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Buy;
