import React from "react";
import BookResult from "../BookResults";
import '../ResultsContainer/ResultsContainer.css';

const ResultsContainer = (props) => {
    if(props.path === "/") {
        return(
            <div id="resultsContainer">
                <h3>Results Found</h3>
                {/* <img src={props.bookData.image} alt="book thumbnail"/> */}
                {props.bookData.map((book) => {
                    const bookInfo = book.volumeInfo;
                    return <BookResult
                    title={bookInfo.title}
                    authors={bookInfo.author}
                    description={bookInfo.description}
                    link={bookInfo.link}
                    image={bookInfo.imageLinks}
                    path={props.path}
                    key={book.id}/>
                })}
            </div>
        );
    } else if(props.path === "/saved") {
        if(props.savedBooks.length > 0) {
            return(
                <div id="resultsContainer">
                    <h3>Saved Books</h3>
                    {props.savedBooks.map((book) => {
                        return <BookResult 
                        title={ book.title }
                        authors={ book.author }
                        description={ book.description }
                        link={ book.link }
                        image={ book.imageLinks }
                        id={ book._id }
                        path={ props.path }
                        key={ book._id }/>
                    })}
                </div>
            );
        } else {
            return(
                 <div id="resultsContainer">
                    <h3>Saved Books</h3>
                    <p>No saved books.</p>
                </div>
            );
        }
    }
}

export default ResultsContainer;