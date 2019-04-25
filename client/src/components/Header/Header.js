import React from "react";

const headerStyle = {
    "backgroundImage": process.env.PUBLIC_URL + "/images/books-2.jpg",
    "maxWidth": "100vw",
    height: "calc(100vw * .43333)",
    "backgroundSize": "cover",
    position: "relative"
}

function Header () {
    return (
        <header style={headerStyle}>
            <h1>Google (React.js) Books Search</h1>
            <p>Search for and Save Books of Interest</p>
        </header>
    );
}

export default Header;