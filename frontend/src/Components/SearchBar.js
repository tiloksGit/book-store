import { useContext } from "react";
import "../styles/searchBar.css";
import dataContext from "../dataContext";

const SearchBar = () => {
  const {faSearch,FontAwesomeIcon} = useContext(dataContext)
  return (
    <div className="search-bar">
      <label htmlFor="search"></label>
      <input type="text" className="search" placeholder="search" />
      <button> <FontAwesomeIcon icon={faSearch}/> </button>
    </div>
  );
};

export default SearchBar;
