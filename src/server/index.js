const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Простой роут для проверки
app.get("/", (req, res) => {
  res.send("✅ Сервер работает! Порт: " + PORT);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});

// Ловим ошибки
process.on("uncaughtException", (err) => {
  console.error("❌ FATAL: Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ FATAL: Unhandled Rejection:", reason);
  process.exit(1);
});
