import React from "react";
import "../styles/welcome.css";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="welcome-page">
      <p>Welcome all</p>
      <Link to="/login">Click here to visit to the exclusive page</Link>
    </div>
  );
};

export default Welcome;
