import React from "react";
import "../styles/avatar.css";

const Avatar = ({ avatarName, avatarURL }) => {
  const name = avatarName;
  return (
    <div className="avatar-container">
      <div className="avatar-img">
        {avatarURL ? (
          <>
            <img
              src={avatarURL}
              alt={avatarName ? avatarName.charAt(0) : "Could not load image"}
            />
          </>
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
            alt={avatarName ? avatarName.charAt(0) : "Could not load image"}
          />
        )}
      </div>
      <div className="avatar-details">
        <b>{`${name}`}</b>
      </div>
    </div>
  );
};

export default Avatar;
