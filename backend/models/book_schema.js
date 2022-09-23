import mongoose from "mongoose";

const Schema = mongoose.Schema;

const book_model_schema = new Schema({
  book_id: Number,
  book_name: String,
  book_author: String,
  book_genre: String,
});

const bookmodel = mongoose.model("bookmodel", book_model_schema);
export default bookmodel;
