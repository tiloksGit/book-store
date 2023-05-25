import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
const Sidebar = () => {
  return (
    <div className="NavBody-parent">
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "list")}
          to="/exclusive/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "list")}
          to="/exclusive/cse"
        >
          Computer Science Engineering
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "list")}
          to="/exclusive/ee"
        >
          Electrical Engineering
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "list")}
          to="/exclusive/me"
        >
          Mechanical Engineering
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "list")}
          to="/exclusive/ie"
        >
          Instrumentation Engineering
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "list")}
          to="/exclusive/ce"
        >
          Civil Engineering
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "list")}
          to="/exclusive/upload/new-book"
        >
          upload book to sell
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
