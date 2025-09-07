const prisma = require("../db/prisma");

async function getArticlePage(req, res) {
  try {
    const category = await prisma.category.findMany();

    const news = await prisma.news.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        author: true,
        category: true,
      },
    });

    const nowDate = new Date();
    res.render("article", {
      title: "DarkBytes",
      logoPartOne: "Dark",
      logoPartTwo: "Bytes",
      headerDateNow: nowDate.toLocaleDateString("ru-RU"),
      category: category,
      news: news,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка сервера");
  }
}

module.exports = { getArticlePage };
