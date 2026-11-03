import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">

        <NavLink to="/" end>
          All
        </NavLink>

        <NavLink to="/fullstackdev">
          Full Stack Development
        </NavLink>

        <NavLink to="/datascience">
          Data Science
        </NavLink>

        <NavLink to="/cybersecurity">
          Cyber Security
        </NavLink>

        <NavLink to="/ai">
          AI
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;
