const prisma = require("../db/prisma");

async function newsPage(req, res) {
  try {
    const categoryId = req.params.id;
    const page = parseInt(req.query.page) || 1;
    const limit = 10;

    const newsCount = await prisma.news.count({
      where: {
        category: {
          id: parseInt(categoryId),
        },
      },
    });

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
      skip: (page - 1) * limit,
      take: limit,
    });

    const category = await prisma.category.findMany();

    const categoryData = await prisma.category.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    const nowDate = new Date();
    res.render("news", {
      title: "DarkBytes",
      logoPartOne: "Dark",
      logoPartTwo: "Bytes",
      headerDateNow: nowDate.toLocaleDateString("ru-RU"),
      category: category,
      newsList: newsList,
      categoryData: categoryData,
      page: page,
      newsCount: newsCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка сервера");
  }
}

module.exports = { newsPage };
