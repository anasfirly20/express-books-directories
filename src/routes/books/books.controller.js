const {
  getAllBooks,
  getBooksById,
  addBook,
  updateBooksById,
  deleteBooksById,
} = require("../../models/books.models");

// GET all books
function httpGetAllBooks(req, res) {
  return res.status(200).json(getAllBooks());
}

// GET book by id
function httpGetBooksById(req, res) {
  const { id } = req.params;
  if (getBooksById(id)) {
    return res.status(200).json(getBooksById(id));
  } else {
    res.status(404).json({
      msg: "Not Found",
    });
  }
}

// ADD book
function httpAddBooks(req, res) {
  const { title, date } = req.body;
  if (title && date) {
    return res.status(201).json(addBook(title, date));
  } else if (!title) {
    return res.status(404).json({
      msg: `Title is missing!`,
    });
  } else if (!date) {
    return res.status(404).json({
      msg: `Date is missing!`,
    });
  }
}

// UPDATE BOOK
function httpUpdateBook(req, res) {
  const { id } = req.params;
  return res.status(200).json(updateBooksById(id));
}

// DELETE BOOK
function httpDeleteBooksById(req, res) {
  const { id } = req.params;
  const book = res.status(200).json(deleteBooksById(id));
  return book;
}

module.exports = {
  httpGetAllBooks,
  httpGetBooksById,
  httpAddBooks,
  httpUpdateBook,
  httpDeleteBooksById,
};
