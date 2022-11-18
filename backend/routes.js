const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const messageController = require("./controllers/messageController");

router.get("/", homeController.getHome);
router.get("/send-message", homeController.getHome);
router.post("/send-message", messageController.postUserMessage);

module.exports = { router };
