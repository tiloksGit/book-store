import React from "react";
import { Outlet } from "react-router-dom";
import Notification from "../Notification";
import Sidebar from "./Sidebar";
import "../styles/layout.css";
import Navbar from "./Navbar";
import Footer from "../Components/Footer";
import DropdownBtn from "./DropdownBtn";

const Layout = () => {
  const winWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <>
      <div className="App-parent">
        <Navbar />
        <div>{winWidth < 500 ? <DropdownBtn /> : <Sidebar />}</div>
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
