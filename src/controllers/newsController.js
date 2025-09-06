const prisma = require("../db/prisma");

async function newsPage(req, res) {
  try {
    const categoryId = req.params.id;

    const newsList = await prisma.news.findMany({
      where: {
        category: {
          id: parseInt(categoryId),
        },
      },
      orderBy: {
        createdAt: "desc",
      },

      include: {
        category: true,
        author: true,
      },

      take: 10,
    });

    const category = await prisma.category.findMany();

    const nowDate = new Date();
    res.render("news", {
      title: "Главная — DarkBytes",
      logoPartOne: "Dark",
      logoPartTwo: "Bytes",
      headerDateNow: nowDate.toLocaleDateString("ru-RU"),
      category: category,
      newsList: newsList,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка сервера");
  }
}

module.exports = { newsPage };
