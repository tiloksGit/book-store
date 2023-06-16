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
//           "http://localhost:4000/",
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
//           "http://localhost:4000/users/profile",
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

// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.css";

function UncontrolledExample() {
  const { userName, accessToken, setMsg } = useContext(dataContext);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userResponse = await fetch(
          "http://localhost:4000/users/profile",
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

  const [caption, setCaption] = useState();
  const [imgURL, setImgUrl] = useState(
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [count, setCount] = useState(0);
  const images = [
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=80",
    "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
  ];

  let timeout;
  const carouselController = (e = count) => {
    // setCount(e);
    setImgUrl(images[e]);
    setCount(e);
    if (count === images.length - 1) {
      setCount(0);
    }
    // clearInterval(timeout);
  };

  // timeout = setInterval(() => carouselController(count), 4000);

  // let timeout = setTimeout(() => carouselController(count), 4000);

  return (
    <>
      <p className="log-info">You are Signed in as: {userName}</p>
      <div className="carousel-parent fade">
        <img src={imgURL} alt="First slide" />
        <h3>{caption}</h3>
        <div className="carousel-button">
          <span
            className="spn-btn"
            onClick={() => carouselController(0)}
          ></span>
          <span
            className="spn-btn"
            onClick={() => carouselController(1)}
          ></span>
          <span
            className="spn-btn"
            onClick={() => carouselController(2)}
          ></span>
          <span
            className="spn-btn"
            onClick={() => carouselController(3)}
          ></span>
        </div>
      </div>
    </>
  );
}

export default UncontrolledExample;
