import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className ="w3-container">
      {/* <h2>Google Book Search & Reading List</h2> */}
        <w3-nav>
        <ul>
          <li>
            <Link to="/modal">Login</Link>
          </li>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
      </ul>
      </w3-nav>
      </div>  
  );
};

export default Nav;
