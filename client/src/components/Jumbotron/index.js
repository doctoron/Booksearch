import React from "react";

function Jumbotron({ props.children }) {
  return (
    <div className = "bg">
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {props.children}
    </div>
  );
}

export default Jumbotron;
