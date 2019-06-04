const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        data: 'orders fetched'
    })
})
router.post('/', (req, res, next) => {
    res.status(201).json({
        data: 'orders created'
    })
})
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        data: `orders details by id ${id}`,
        id: id
    })
})
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        data: 'orders deleted',
        id: id
    })
})



module.exports = router;