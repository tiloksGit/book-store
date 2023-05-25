import React, { useContext, useEffect, useState } from "react";
import Avatar from "../Components/Avatar";
import "../styles/profile.css";
import dataContext from "../dataContext";
import apiResponse from "../app/api/apiSlice";

const Profile = () => {
  const { userName, accessToken, id, books, handleLogout } =
    useContext(dataContext);
  let user = JSON.parse(localStorage.getItem("user"));

  const [myUploads, setMyUploads] = useState("");

  const handeDelete = async () => {
    alert(
      "you are sure you want to delete your account.. your data will be removed from the database"
    );
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ username: userName }),
    };
    console.log(userName);
    const response = await apiResponse(
      "https://mini-project-backend-4ylv.onrender.com/users",
      options
    );
    if (response.ok) {
      handleLogout();
      alert("User deleted");
    } else {
      console.log("error");
    }
  };

  const handeleRemove = async (book) => {
    try {
      const userResponse = await fetch(
        "https://mini-project-backend-4ylv.onrender.com/books",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ id: book._id }),
        }
      );

      const userData = await userResponse.json();

      alert(userData.message);
    } catch (err) {
      alert(err.message);
    }
  };

  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     try {
  //       const userResponse = await fetch(
  //         "https://mini-project-backend-4ylv.onrender.com/users/profile",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //           body: JSON.stringify({ username: userName }),
  //         }
  //       );

  //       const userData = await userResponse.json();

  //       if (userResponse.status === 200) {
  //         setUser(userData);
  //       } else {
  //         alert(userData.message);
  //       }
  //     } catch (err) {
  //       alert(err.message);
  //     }
  //   };
  //   getUserDetails();
  // }, [accessToken]);

  useEffect(() => {
    if (books?.length) {
      const newBook = books.filter((book) => book.uploadedBy === id);
      setMyUploads(newBook);
    }
  }, [books]);

  let thisBook;
  // const thisBookHandle = async (user) => {
  //   {
  //     thisBook = books?.length
  //       ? books.filter((book) => book._id === user.bookId)
  //       : "";
  //     console.log(thisBook);
  //   }
  // };

  return (
    <div className="profile-container">
      <Avatar avatarName={user.username} avatarURL={user.avatarURL} />
      <div className="profile-details">
        Branch: {user.branch}
        <br />
        Semester: {user.semester}
        <br />
        BooksBought: {user.booksCount}
        <br />
        My transactions: <br />
        {user.booksBought?.length
          ? user.booksBought.map((user, i) => (
              <div key={i} className="myUploads">
                {/* {thisBookHandle(user)} */}
                {/* <img src={user.imgURL} alt="Book" height="200" width="200" /> */}
                {`${i + 1} :`}Book Id : {user.bookId} <br />
              </div>
            ))
          : ""}
        <br />
        Email id: {user.emailID}
        <h3>My uploads</h3>
        <div className="delete-user-btn-container">
          <button className="btn" onClick={handeDelete}>
            Delete user
          </button>
        </div>
        {myUploads?.length ? (
          <div className="book-container">
            {myUploads.map((book) => (
              <div key={book._id} className="myUploads">
                <img src={book.imgURL} height="200" width="200" />
                <br />
                Book Title : {book.title} <br /> Author : {book.author}
                {/* <br /> */}
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
    </div>
  );
};

export default Profile;
