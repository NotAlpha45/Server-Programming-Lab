import express from "express";
import index_controller from "../controllers/index_controller.js";
import { show_book_form, post_books, get_books } from "../controllers/book_controller.js";

const router = express.Router();

router.get("", index_controller);
router.get("/books", get_books);
router.get("/enter_books", show_book_form);
router.post("/post_book", post_books);

export default router;
