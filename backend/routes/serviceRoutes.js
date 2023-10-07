const {
  createService,
  deleteService,
  getAllServices,
  getSingleService,
  updateService
} = require('../controllers/serviceController')

const express = require('express')
const router = express.Router()

router
  .route('/:id')
  .get(getSingleService)
  .patch(updateService)
  .delete(deleteService)
router.route('/').get(getAllServices).post(createService)

module.exports = router
