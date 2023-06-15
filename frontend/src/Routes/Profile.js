import React, { useContext, useEffect, useState } from "react";
import Avatar from "../Components/Avatar";
import "../styles/profile.css";
import dataContext from "../dataContext";
import apiResponse from "../app/api/apiSlice";

const Profile = () => {
  const {
    userName,
    accessToken,
    id,
    books,
    handleLogout,
    FontAwesomeIcon,
    faSpinner,
    setLoadBook,
  } = useContext(dataContext);
  let user = JSON.parse(localStorage.getItem("user"));

  const [myUploads, setMyUploads] = useState("");

  const handeDelete = async () => {
    alert(
      "you are deleting your account.. your data will be removed from the database"
    );
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ username: userName }),
    };

    const response = await apiResponse("http://localhost:4000/users", options);
    if (response.ok) {
      handleLogout();
      alert("User deleted");
    } else {
      console.log("error");
    }
  };

  const [loading, setLoading] = useState(false);
  const handeleRemove = async (book) => {
    setLoading(true);
    try {
      const userResponse = await fetch("http://localhost:4000/books", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ id: book._id }),
      });

      const userData = await userResponse.json();

      alert(userData.message);
      setLoadBook("yes");
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (books?.length) {
      const newBook = books.filter((book) => book.uploadedBy === id);
      setMyUploads(newBook);
    }
    setLoading(false);
  }, [books]);

  return (
    <div className="profile-container">
      <Avatar avatarName={user.username} avatarURL={user.avatarURL} />
      <div className="profile-details">
        <p>Name: {user.username}</p>
        <p>Branch: {user.branch}</p>
        <p>Semester: {user.semester}</p>
        <p>BooksBought: {user.booksCount}</p>
        <p>Email id: {user.emailID}</p>
        My transactions: <br />
        {user.booksBought?.length ? (
          <table>
            <tr>
              <th>Slno.</th>
              <th>Book Id</th>
            </tr>
            {user.booksBought?.length
              ? user.booksBought.map((user, i) => (
                  <tr key={i}>
                    <td width="30%">{`${i + 1}`}</td>
                    <td>{user.bookId} </td>
                  </tr>
                ))
              : ""}
          </table>
        ) : (
          "You have no Transanctions"
        )}
      </div>
      <h3>My uploads</h3>
      <div className="delete-user-btn-container">
        <button className="btn" onClick={handeDelete}>
          Delete user
        </button>
      </div>
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} spin />
      ) : myUploads?.length ? (
        <div className="uploads-container">
          {myUploads.map((book) => (
            <div key={book._id} className="myUploads">
              <img src={book.imgURL} height="200" width="200" />
              <br />
              Book Title : {book.title} <br /> Author : {book.author}
              <div className="sales-btn-container">
                <button className="btn" onClick={() => handeleRemove(book)}>
                  Remove from sales option
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>No Books uploaded for sale</>
      )}
    </div>
  );
};

export default Profile;
