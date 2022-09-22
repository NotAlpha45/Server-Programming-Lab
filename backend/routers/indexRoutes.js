import express from "express";
import cv_renderer from "../controllers/cvController.js";

const profile_router = express.Router();

profile_router.get("/", cv_renderer);

export default profile_router;
