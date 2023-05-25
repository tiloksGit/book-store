import { useContext, useState } from "react";
import dataContext from "../../dataContext";
import apiResponse from "../../app/api/apiSlice";

const Buy = ({}) => {
  const { userName, accessToken, activeSales } = useContext(dataContext);
  const [res, setRes] = useState("");
  const sellBook = async () => {
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
        "https://mini-project-backend-4ylv.onrender.com/sendmail",
        options
      );
      if (response) {
        const result = await response.json();
        setRes(result.message);
      }
    } catch (err) {
      alert(`Error: ${err.message}....please reload the page`);
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
          <button onClick={sellBook}>confirm buy</button>
        </>
      )}
    </>
  );
};

export default Buy;
