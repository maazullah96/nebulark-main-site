const router = require('express').Router()
const {
  getAboutUs,
  createAboutUs
} = require('../controllers/aboutUsController')

router.route('/').get(getAboutUs).post(createAboutUs)

module.exports = router
