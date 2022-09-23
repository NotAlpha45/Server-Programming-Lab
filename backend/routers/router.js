import express from "express";
import index_controller from "../controllers/index_controller.js";
import { show_books } from "../controllers/book_controller.js";

const router = express.Router();

router.get("", index_controller);
router.get("/books", show_books);

export default router;
