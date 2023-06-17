import React from "react";
import { Outlet } from "react-router-dom";
import Notification from "../Notification";
import Sidebar from "./Sidebar";
import { useState, useEffect, useContext } from "react";
import dataContext from "../dataContext";
import "../styles/layout.css";
import Navbar from "./Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  const { setAccessToken } = useContext(dataContext);
  return (
    <>
      <div className="App-parent">
        <Navbar />
        <div>
          <Sidebar />
        </div>
        <div className="App">
          <main className="layout-main-section">
            <Outlet />
          </main>
          <div className="right-layout">
            We will have some notification in here
            <Notification />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
