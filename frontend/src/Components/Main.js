import { useEffect, useState } from "react";
import { useContext } from "react";
import dataContext from "../dataContext";
import "../styles/home.css";
// const Main = () => {
//   const { userName, accessToken, setMsg } = useContext(dataContext);

//   const [displayContent, setDisplayContent] = useState("");
//   useEffect(() => {
//     setMsg(null);
//     const getContent = async () => {
//       try {
//         const response = await fetch(
//           "https://bookstore-backend-kt7c.onrender.com/",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "text/html",
//             },
//           }
//         );

//         if (response.ok) {
//           const htmlContent = await response.text();
//           setDisplayContent(htmlContent);
//         }
//       } catch (err) {
//         alert(err.message);
//       }
//     };

//     getContent();
//   }, [accessToken]);

//   useEffect(() => {
//     const getUserDetails = async () => {
//       try {
//         const userResponse = await fetch(
//           "https://bookstore-backend-kt7c.onrender.com/users/profile",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${accessToken}`,
//             },
//             body: JSON.stringify({ username: userName }),
//           }
//         );

//         const userData = await userResponse.json();

//         if (userResponse.status === 200) {
//           // setUser(userData);
//           localStorage.setItem("user", JSON.stringify(userData));
//         } else {
//           alert(userData.message);
//         }
//       } catch (err) {
//         alert(err.message);
//       }
//     };
//     getUserDetails();
//   }, [accessToken]);

//   return (
//     <div
//       style={{
//         backgroundImage:
//           "https://c1.wallpaperflare.com/preview/127/366/443/library-book-bookshelf-read.jpg",
//       }}
//     >
//       <p className="log-info">You are Signed in as: {userName}</p>
//       <div dangerouslySetInnerHTML={{ __html: displayContent }} />
//     </div>
//   );
// };

// export default Main;

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

function UncontrolledExample() {
  const { userName, accessToken, setMsg } = useContext(dataContext);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userResponse = await fetch(
          "https://bookstore-backend-kt7c.onrender.com/users/profile",
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
    <>
      <p className="log-info">You are Signed in as: {userName}</p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c1.wallpaperflare.com/preview/549/799/635/book-shelves-book-wall-bookcase-books.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c0.wallpaperflare.com/preview/469/70/385/background-book-bookcase-books.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c0.wallpaperflare.com/preview/469/70/385/background-book-bookcase-books.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default UncontrolledExample;
