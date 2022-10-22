import BookModel from "../models/book_schema.js";

const show_book_form = function (req, res) {
  res.render("book_form.ejs");
};

const post_books = async function (req, res) {
  const book = new BookModel({
    book_id: Number(req.body.id),
    book_name: req.body.name,
    book_author: req.body.author,
    book_genre: req.body.genre,
  });

  await book
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

const get_books = async function (req, res) {
  const books = await BookModel.find({});
  
  res.render("table.ejs", { book_data: books });
};

export { show_book_form, post_books, get_books };
