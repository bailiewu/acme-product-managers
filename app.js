const app = require('express')()
const { Product, User } = require('./db/index').models

app.get('/products', (req, res, next) => {
    Product.findAll({
        include: {
            model: User,
            as: 'manager'
        }
    })
        .then((product) => {
            res.json(product)
        })
        .catch(next)
})

app.get('/users', (req, res, next) => {
    User.findAll()
        .then((user) => {
            res.json(user)
        })
        .catch(next)
})

//post
// app.post('/products', (req, res, next) => {
//     // console.log('in api post products :', req.body)
//     Product.create(req.body)
//         .then(product => res.json(product))
//         .catch(next)
// })

//update. nevermind theres no update.
// app.put('products/:todoId', (req, res, next) => {
//   Product.findById(req.params.todoId)
//     .then(product => product.update(req.body))
//     .then(product => res.json(product))
//     .catch(next)
// })

module.exports = app
