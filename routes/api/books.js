const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Post-request handler
// Matches with "/api/books"
router
  .route("/")
// Retrieve book collection
  .get(booksController.findAll)
// Add a new book to the db
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
