const router = require('express').Router()
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct
} = require('../controllers/productController')
router
  .route('/:id')
  .get(getProduct)
  .post(createProduct)
  .patch(updateProduct)
  .delete(deleteProduct)
router.route('/').get(getAllProducts).post(createProduct)

module.exports = router
