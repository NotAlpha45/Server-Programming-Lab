import express from "express";
import index_controller from "../controllers/index_controller.js";

const router = express.Router();

router.get("", index_controller);

export default router;
