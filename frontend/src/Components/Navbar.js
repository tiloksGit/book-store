import SearchBar from "./SearchBar";
import "../styles/layout.css";
import { Link } from "react-router-dom";
import logo from "../public/logo.jpeg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="searchbar-container">
        <SearchBar />
      </div>
      <Link to="profile">
        <div className="profile fade">
          <p>{localStorage.getItem("name").charAt(0)}</p>My Profile
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
