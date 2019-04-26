import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

const BookDetails = ({ bookData }) => {
  const { title, author, synopsis } = bookData[0];
  return (
    <div id="resultsContainer">

      <h3>Book Details</h3>

      <main>
        <h4>{title}</h4>
        <h4>{author}</h4>
        <h4>{synopsis}</h4>
      </main>
      
    </div>
  );
};

export default BookDetails;