import React from "react";

const SearchForm = (props) => {
    return(
        <div id="searchContainer">
            {/* <h3>Book Search</h3> */}
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter A Book Title To Search:</label>
                <br></br>
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Title of Book" required/>
                <br></br>
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;