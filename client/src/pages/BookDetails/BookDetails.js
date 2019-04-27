import React from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";

const BookDetails = (props) => {
  const { title, author, synopsis } = props.bookData;
  // console.log("BookDetails Ln 9: contains this:", props.bookData);
  return (
    <div id="resultsContainer">
      <main>
        {/* <h4>Book Details:</h4> */}
        <h5>{props.bookData.title}</h5>
        <h5>{props.bookData.authors}</h5>
        <h5>{props.bookData.description}</h5>
      </main>
    </div>
  );
};

export default BookDetails;