import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Export an object with a "search" method that searches the Giphy API for the passed query

  search: function(query) {
      console.log("GooogleAPI call", query);
    return axios.get(BASEURL + query);
  },
  // Gets all books
  getAllBooks: function () {
    return axios.get("api/books/");
  },
  // Gets authorization
  getAuthorized: function() {
    return axios.post("/api/login");
  },
  // Gets the book with the given id
  getBook: function(id) {
    console.log('id',id);
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/saved", bookData);
  },
  addBookToDB: function(bookData) {
    return axios.post("/api/books/")
  }
};
