import React from "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";

const BookDetails = (props) => {
  const { title, authors, description } = props.bookData;
  // console.log("BookDetails Ln 9: contains this:", props.bookData);
  return (
    <div id="resultsContainer">
      <main>
        <h5>{props.bookData.title}</h5>
        <h5>{props.bookData.authors}</h5>
        <h5>{props.bookData.description}</h5>
      </main>
    </div>
  );
};

export default BookDetails;