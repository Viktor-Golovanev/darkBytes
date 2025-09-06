const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const homeRoutes = require("../routes/homeRoutes");
const articleRoutes = require("../routes/articleRoutes");
const newsRoutes = require("../routes/newsRoutes");

// Установи EJS как шаблонизатор
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../src/views"));

// Обслуживай статические файлы из папки public
app.use(express.static(path.join(__dirname, "../../public")));

// Главная страница
app.use("/", homeRoutes);
app.use("/", articleRoutes);
app.use("/", newsRoutes);

// Запусти сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
