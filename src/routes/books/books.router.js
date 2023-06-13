const express = require("express");

// Controller
const {
  httpGetAllBooks,
  httpGetBooksById,
  httpAddBooks,
  httpUpdateBook,
  httpDeleteBooksById,
} = require("./books.controller");

const booksRouter = express.Router();

booksRouter.get("/", httpGetAllBooks);
booksRouter.get("/:id", httpGetBooksById);
booksRouter.post("/", httpAddBooks);
booksRouter.put("/:id", httpUpdateBook);
booksRouter.delete("/:id", httpDeleteBooksById);

module.exports = booksRouter;
