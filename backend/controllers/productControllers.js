const Product = require('../models/productModel')

const postProduct = async (req, res) => {
    const {title, price} = req.body
    
    try {
        const product = await Product.create({title, price})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getProducts = async (req, res) => {
    try {
        const allProducts  = await Product.find({}).sort({createdAt: -1})
        res.status(200).json(allProducts)
    } catch {
        res.status(500).send('Server Error')
    }
}

module.exports = {
    postProduct,
    getProducts
}