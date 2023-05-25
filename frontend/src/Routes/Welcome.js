import React from "react";
import "../styles/welcome.css";
import { Link } from "react-router-dom";
const Welcome = () => {
  const content = (
    <>
      <Link to="/login">Click here to visit to the exclusive page</Link>
    </>
  );
  return (
    <div className="welcome-page">
      <p>Welcome all</p>
      {content}
    </div>
  );
};

export default Welcome;
