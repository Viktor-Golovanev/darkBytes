const prisma = require("../db/prisma");

async function getHomePage(req, res) {
  try {
    const category = await prisma.category.findMany();

    const previewsNews = await prisma.news.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: {
        author: true,
        category: true,
      },
      take: 5,
    });

    const newsPart = await prisma.news.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: {
        author: true,
        category: true,
      },
      skip: 5,
      take: 4,
    });

    const newsList = await prisma.news.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: {
        author: true,
        category: true,
      },
      skip: 9,
      take: 6,
    });

    const quote = await prisma.quote.findMany({
      where: { id: 1 },
    });

    const nowDate = new Date();
    res.render("layout", {
      title: "Главная — DarkBytes",
      logoPartOne: "Dark",
      logoPartTwo: "Bytes",
      headerDateNow: nowDate.toLocaleDateString("ru-RU"),
      previewsNews: previewsNews,
      newsPart: newsPart,
      quote: quote,
      newsList: newsList,
      category: category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка сервера");
  }
}

module.exports = { getHomePage };
