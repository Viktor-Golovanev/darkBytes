const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const homeRoutes = require(path.join(__dirname, "../routes/homeRoutes"));
const articleRoutes = require(path.join(__dirname, "../routes/articleRoutes"));
const newsRoutes = require(path.join(__dirname, "../routes/newsRoutes"));

// Установи EJS как шаблонизатор
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../src/views"));

// Обслуживай статические файлы из папки public
app.use(express.static(path.join(__dirname, "../../public")));

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "DarkBytes работает на TimeWeb Cloud!",
    port: PORT,
  });
});

// Главная страница
app.use("/", homeRoutes);
app.use("/", articleRoutes);
app.use("/", newsRoutes);

// Запусти сервер
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
