import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Notification from "../Notification";
import Sidebar from "./Sidebar";
import { useState, useEffect, useContext } from "react";
import dataContext from "../dataContext";
import "../styles/layout.css";
import Navbar from "./Navbar";

const Layout = () => {
  const { setAccessToken } = useContext(dataContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const handleWindowRefresh = () => {
  //     console.log("1");
  //     if (localStorage.getItem("jwt")) {
  //       //   try {
  //       //     const response = await fetch("https://mini-project-backend-4ylv.onrender.com/auth/refresh", {
  //       //       method: "POST",
  //       //       headers: {
  //       //         "Content-Type": "application/json",
  //       //         token: localStorage.getItem("jwt"),
  //       //       },
  //       //       body: JSON.stringify({ username: localStorage.getItem("name") }),
  //       //     });
  //       //     const responseData = await response.json();
  //       //     // console.log(responseData.message);
  //       //     if (responseData) {
  //       //       setAccessToken(responseData.setAccessToken);
  //       //       navigate("/");
  //       //     }
  //       //   } catch (err) {
  //       //     console.log(err);
  //       //   }
  //     }
  //   };

  //   window.addEventListener("unload", handleWindowRefresh);

  //   return () => {
  //     window.removeEventListener("unload", handleWindowRefresh);
  //   };
  // }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="App-parent">
        <div className="App">
          <div>
            <Sidebar />
          </div>
          <main className="layout-main-section">
            <Outlet />
          </main>
          <div className="right-layout">
            We will have some notification in here
            <Notification />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
