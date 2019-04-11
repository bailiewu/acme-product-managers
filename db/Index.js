const { conn } = require('./conn')
const Product = require('./product')
const User = require('./User')

Product.belongsTo(User, { as: 'manager' })

const syncAndSeed = () => {
    return conn.sync({ force: true })
        .then(() => {
            return Promise.all([
                User.create({ name: 'moe' }),
                User.create({ name: 'larry' }),
                User.create({ name: 'curly' })
            ])
        })
        .then(() => {
            return Promise.all([
                Product.create({ name: 'Foo' }),
                Product.create({ name: 'Bar' }),
                Product.create({ name: 'Bazz' })
            ])
        })
        .then(([Foo, Bar, Buzz]) => {
            Foo.setManager(1)
        })
}
module.exports = {
    syncAndSeed,
    models: {
        Product,
        User
    }
}
