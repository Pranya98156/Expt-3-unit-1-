import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        Product Cards
      </NavLink>

      <NavLink to="/library" className="nav-link">
        Library Management
      </NavLink>

      <NavLink to="/person" className="nav-link">
        Person Hierarchy
      </NavLink>
    </nav>
  );
}

export default Navbar;
