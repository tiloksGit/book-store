import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const dataContext = createContext({});

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");
  const id = localStorage.getItem("id");
  const [name, setName] = useState("");
  const accessToken = localStorage.getItem("jwt");
  const [passwd, setPasswd] = useState("");
  const [msg, setMsg] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [user, setUser] = useState([]);
  const [activeSales, setActiveSales] = useState();

  const handleLogout = async () => {
    console.log(123);
    try {
      const response = await fetch(
        "https://mini-project-backend-4ylv.onrender.com/auth/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("jwt"),
          },
        }
      );
      const responseData = await response.json();
      // console.log(responseData.message);
      if (responseData) {
        localStorage.removeItem("jwt");
        localStorage.removeItem("name");
        localStorage.removeItem("id");
        localStorage.removeItem("user");

        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://mini-project-backend-4ylv.onrender.com/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: name, password: passwd }),
        }
      );

      const responseData = await response.json();
      if (response.status === 200) {
        localStorage.setItem("name", responseData.username);
        localStorage.setItem("jwt", responseData.accessToken);
        localStorage.setItem("id", responseData.id);
        setName("");
        setMsg("Login succesful \n Redirecting to the home page...");
      } else {
        setErrMsg(
          `Recieved status :${response.status} from the server with the message "${responseData.message}"`
        );
      }
    } catch (err) {
      alert("server error please reload the page");
    }
  };

  const [books, setBooks] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch(
          "https://mini-project-backend-4ylv.onrender.com/books",
          {
            method: "GET",
          }
        );

        const data = await response.json();
        if (response.status === 200) {
          setBooks(data.books);
        } else {
          alert(data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getBooks();
  }, [name]);

  return (
    <dataContext.Provider
      value={{
        userName,
        name,
        setName,
        passwd,
        setPasswd,
        accessToken,
        id,
        books,
        handleLogin,
        errMsg,
        setErrMsg,
        setMsg,
        msg,
        handleLogout,
        user,
        setUser,
        setActiveSales,
        activeSales,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default dataContext;
