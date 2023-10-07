const asyncHandler = require('../middleware/asyncHandler')
const AboutUs = require('../models/AboutUs')

const getAboutUs = asyncHandler(async (req, res) => {
  const aboutUs = await AboutUs.find({})
  // console.log(aboutUs)
  console.log(aboutUs[0])
  res.json(aboutUs[0])
})

const createAboutUs = asyncHandler(async (req, res) => {
  const aboutUs = await AboutUs.create(req.body)
  res.status(201).json(aboutUs)
})

module.exports = {
  getAboutUs,
  createAboutUs
}
