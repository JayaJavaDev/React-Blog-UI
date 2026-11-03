import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          Logo
        </Link>

        <span className="header-divider"></span>

        <Link to="/" className="blog-name">
          Blog
        </Link>

        <input
          type="text"
          placeholder="What do you want to read?"
          className="search-input"
        />
      </div>

      <div className="header-right">
        <button className="signin-btn">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
