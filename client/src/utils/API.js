import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Export an object with a "search" method that searches the Google Books API for the passed query

  search: (query) => {
    console.log("GooogleAPI call", query);
    return axios.get(BASEURL + query);
  },
  // Gets all books
  getAllBooks: ()=> {
    return axios.get("api/books");
  },
  // Gets authorization
  getAuthorized: () => {
    return axios.post("/api/login");
  },
  // Gets the book with the given id
  getBook: (id) => {
    console.log("id", id);
    return axios.get(`/api/books/" ${id}`);
  },
  // Deletes the book with the given id
  deleteBook:  (id) => {
    return axios.delete(`/api/books/" ${id}`);
  },
  // Creates an instance of book in the db
  addBookToDB: (bookData) => {
    console.log("FRONT API")
    return axios.post("/api/books", bookData);
  }
};
