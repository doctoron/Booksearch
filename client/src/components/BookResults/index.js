import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BookResults(props) {
  return (
    <span className="book-results" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default BookResults;
