import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h2 className="nav-head">Google Book Search & Reading List</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
        <li>
          <Link to="/modal">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
