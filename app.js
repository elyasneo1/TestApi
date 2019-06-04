const express = require('express');
const app = express();
const moragn = require('morgan');

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/order')

app.use(moragn("dev"));

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
         errMsg : err.message  
    })
})


module.exports = app;