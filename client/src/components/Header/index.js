import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Header(props) {
  return (
    <span className="header" {...props}>
    </span>
  );
}

export default Header;
