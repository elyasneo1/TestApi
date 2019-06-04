const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        data: 'get all product'
    })
})
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        data: 'get special product wich id is ' + id
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        data: 'post req to product'
    })
})

router.patch('/:id', (req, res, next) => {
    res.status(201).json({
        data: 'patch product by id ' + id
    })
})
router.delete('/:id', (req, res, next) => {
    res.status(201).json({
        data: 'delete product by id ' + id
    })
})

module.exports = router;