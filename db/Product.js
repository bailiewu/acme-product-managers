const { conn, Sequelize } = require('./conn')

const Product = conn.define('product', {
    name: Sequelize.TEXT,
})

module.exports = Product
