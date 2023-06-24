import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import dataContext from "../dataContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function DropdownBtn() {
  const [isShown, setIsShown] = useState(false);
  const { faList, FontAwesomeIcon } = useContext(dataContext);
  return (
    <div className="dropdown-btn">
   <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <FontAwesomeIcon icon={faList} />
      </button>
      {isShown && (
        <div>
          <Sidebar />
        </div>
      )}
    </div>
  );
}

export default DropdownBtn;
