const Service = require('../models/Service')
const asyncHandler = require('../middleware/asyncHandler')

// Get all services
const getAllServices = asyncHandler(async (req, res) => {
  const services = await Service.find({})
  res.status(200).json(services)
})

// Get a single services
const getSingleService = asyncHandler(async (req, res) => {
  const { id } = req.params
  console.log(console.log(`req.params == ${JSON.stringify(req.params)}`))
  const services = await Service.findById(id)
  res.status(200).json(services)
})

// Create a new service
const createService = asyncHandler(async (req, res) => {
  const { title, description, icon } = req.body
  const service = new Service({ title, description, icon })
  const savedService = await service.save()
  res.status(201).json(savedService)
})

// Update a service
const updateService = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { title, description, icon } = req.body

  // Find the existing service
  const existingService = await Service.findById(id)
  if (!existingService) {
    res.status(400)
    throw new Error('Service Does not Exists')
  }
  // Update the properties based on the provided values or use the existing values if not provided
  const updatedtitle = title || existingService.title
  const updatedDescription = description || existingService.description
  const updatedIcon = icon || existingService.icon

  // Update the service
  const updatedService = await Service.findByIdAndUpdate(
    id,
    { title: updatedtitle, description: updatedDescription, icon: updatedIcon },
    { new: true }
  )

  res.status(200).json(updatedService)
})

// Delete a service
const deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params
  await Service.findByIdAndDelete(id)
  res.status(204).send({ msg: 'Successfully Deleted' })
})

module.exports = {
  createService,
  getSingleService,
  deleteService,
  getAllServices,
  updateService
}
