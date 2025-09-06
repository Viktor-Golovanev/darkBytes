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

    const categoryData = await prisma.category.findUnique({
      where: {
        id: parseInt(categoryId),
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
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка сервера");
  }
}

module.exports = { newsPage };
