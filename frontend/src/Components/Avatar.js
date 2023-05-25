import React from "react";
import "../styles/avatar.css";

const Avatar = ({ avatarName, avatarURL }) => {
  const name = avatarName;
  return (
    <div className="avatar-container">
      <div className="avatar-img">
        <img
          src={avatarURL}
          alt={avatarName ? avatarName.charAt(0) : "Could not load image"}
          height="300px"
          width="300px"
        />
      </div>
      <div className="avatar-details">
        <b>{`${name}`}</b>
      </div>
    </div>
  );
};

export default Avatar;
