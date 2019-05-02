import React from "react";
import locImage from "../../images/LibraryOfCongress.jpg"
import '../Header/Header.css';

const headerStyle = {
    "backgroundImage": `url(${locImage})`,
    "maxWidth": "100vw",
    "height": "calc(100vw * .43333)",
    "backgroundSize": "cover",
    "position": "relative"
}

function Header () {
    return (
        <header style={headerStyle}>
            <h2>Google Book Search & Reading List</h2>
            <h4>Search, Save and Build A Book Collection</h4>
        </header>
    );
}

export default Header;