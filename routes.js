const {getAllproducts ,
    getProductDetail,
    createProduct,
    deleteProduct,
    updateProduct} = require('../controllers/productController.js')
const express = require('express')
const router = express.Router()

router.get('/readAll',getAllproducts)
router.get('/read/:productId',getProductDetail)
router.post('/create',createProduct)
router.put('/update/:productId',updateProduct)
router.delete('/delete/:productId',deleteProduct)

module.exports = router