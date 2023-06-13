const books = [
  {
    id: 1,
    title: "The Narnia",
    releaseDate: new Date("December 19, 1997"),
    isRead: false,
  },
  {
    id: 2,
    title: "The Mutant Ninja Turtle",
    releaseDate: new Date("February 19, 1899"),
    isRead: false,
  },
  {
    id: 3,
    title: "The New Book",
    releaseDate: new Date("May 5, 2023"),
    isRead: true,
  },
];

// Function GET All Books
function getAllBooks() {
  return books;
}

// Function GET books by id
function getBooksById(id) {
  return books.find((book) => book.id === +id);
}

// Function ADD books
const getBookId = books.map((book) => book.id);
let bookId = +getBookId.splice(-1).join() + 1;
function addBook(title, date) {
  bookId++;
  const book = {
    id: bookId,
    title,
    releaseDate: date,
    isRead: false,
  };
  books.push(book);
  return books.at(-1);
}

// Update book
// function updateBooksById(id, isRead) {
//   const bookId = id - 1;
//   books[bookId].isRead = isRead;
//   return books[bookId];
// }

function updateBooksById(id) {
  const index = books.findIndex((book) => book.id === +id);
  books[index].isRead = !books[index].isRead;
  return books[index];
}

// DELETE books by id
function deleteBooksById(id) {
  const filteredBooks = books.filter((book) => book.id !== +id);
  return filteredBooks;
}

module.exports = {
  getAllBooks,
  getBooksById,
  addBook,
  updateBooksById,
  deleteBooksById,
};
