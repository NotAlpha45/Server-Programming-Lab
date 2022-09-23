import BookModel from "../models/book_schema.js";

const show_books = function (req, res) {
  res.render("table.ejs");
};

const post_books = function (req, res) {
  const book = new BookModel({
    book_id: req.body.id,
    book_name: req.body.name,
    book_author: req.body.author,
    book_genre: req.body.genre,
  });

  book
    .save()
    .then(function () {
      console.log("Book saved successfully!");
    })
    .catch(function (err) {
      console.log(err);
    })
    .finally(function () {
      res.redirect("/books");
    });
};

const get_books = function (req, res) {
  const books = BookModel.find({}, function (err, books) {
    if (err) {
      console.log(err);
      res.redirect("/books");
    } else {
      res.render("table.ejs", books);
    }
  });
};

export { show_books, post_books };
