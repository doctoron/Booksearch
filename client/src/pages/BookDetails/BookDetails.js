import React from "react";

const BookDetails = (props) => {
  const { title, authors, description } = props.bookData;
  console.log("BookDetails Ln 9: contains this:", props.bookData);
  return (
    <div id="resultsContainer">
      <main>
        <h5>{props.bookData.title}</h5>
        <h5>{props.bookData.authors}</h5>
        <h5>{props.bookData.description}</h5>
        {/* <img src={props.bookData.image} alt="book thumbnail"/> */}
      </main>
      {
        props.bookData.title ? 
          <button onClick={()=>props.saveBook(props.bookData)}>Save Book</button>
          : null
      }
    </div>
  );
};

export default BookDetails;