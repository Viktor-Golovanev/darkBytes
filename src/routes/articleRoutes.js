const express = require("express");
const router = express.Router();
const articlePage = require("../controllers/articleControllers");

router.get("/newPage/:id", articlePage.getArticlePage);

module.exports = router;
