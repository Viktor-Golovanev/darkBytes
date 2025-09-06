const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

router.get("/newsCategory/:id", newsController.newsPage);

module.exports = router;
