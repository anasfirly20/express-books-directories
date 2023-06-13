const express = require("express");
const morgan = require("morgan");

// Router
const booksRouter = require("./routes/books/books.router");

const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use("/books", booksRouter);

module.exports = app;
