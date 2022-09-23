import express from "express";
import index_controller from "../controllers/index_controller.js";
import { show_books, post_books } from "../controllers/book_controller.js";

const router = express.Router();

router.get("", index_controller);
router.get("/books", show_books);
router.post("/post_book", post_books);

export default router;
