import { useEffect, useState } from "react";
import { useContext } from "react";
import dataContext from "../dataContext";
import "../styles/home.css";
const Main = () => {
  const { userName, accessToken, setMsg } = useContext(dataContext);

  const [displayContent, setDisplayContent] = useState("");
  useEffect(() => {
    setMsg(null);
    const getContent = async () => {
      try {
        const response = await fetch(
          "https://mini-project-backend-4ylv.onrender.com/",
          {
            method: "GET",
            headers: {
              "Content-Type": "text/html",
            },
          }
        );

        if (response.ok) {
          const htmlContent = await response.text();
          setDisplayContent(htmlContent);
        }
      } catch (err) {
        alert(err.message);
      }
    };

    getContent();
  }, [accessToken]);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userResponse = await fetch(
          "https://mini-project-backend-4ylv.onrender.com/users/profile",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ username: userName }),
          }
        );

        const userData = await userResponse.json();

        if (userResponse.status === 200) {
          // setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
        } else {
          alert(userData.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };
    getUserDetails();
  }, [accessToken]);

  return (
    <div
      style={{
        backgroundImage:
          "https://c1.wallpaperflare.com/preview/127/366/443/library-book-bookshelf-read.jpg",
      }}
    >
      <p className="log-info">You are Signed in as: {userName}</p>
      <div dangerouslySetInnerHTML={{ __html: displayContent }} />
    </div>
  );
};

export default Main;
