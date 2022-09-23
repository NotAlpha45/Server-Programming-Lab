import bookmodel from "../models/book_schema.js";

const show_books = function (req, res) {
  res.render("table.ejs");
};

export { show_books };
