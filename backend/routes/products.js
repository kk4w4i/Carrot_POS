const express = require('express')
const {
    postProduct,
    getProducts
} = require('../controllers/productControllers')
const router = express.Router()

router.post('/product-post', postProduct)

// login route
router.get('/get-products', getProducts)

module.exports = router