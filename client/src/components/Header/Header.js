import React from "react";
import locImage from "../../images/LibraryOfCongress.jpg"

const headerStyle = {
    "backgroundImage": `url(${locImage})`,
    "maxWidth": "100vh",
    "height": "calc(100vh * .43333)",
    "backgroundSize": "cover",
    "position": "relative"
}

function Header () {
    return (
        <header style={headerStyle}>
            <h1>Google Books Search (React.js)</h1>
            <p>Search, Save and Build A Book Collection</p>
        </header>
    );
}

export default Header;