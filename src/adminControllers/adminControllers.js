const prisma = require('../db/prisma');
const path = require('path');

async function getAdminPanel(req, res) {
    try {
        res.render(path.join(__dirname, '../views/admin/admin'), {
            title: "Админ панель"
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAdminPanel };