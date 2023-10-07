const Product = require('../models/Product') // Assuming the model file is in a "models" directory
const Service = require('../models/Service') // Assuming the model file is in a "models" directory

const asyncHandler = require('../middleware/asyncHandler')

// Get all products
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()
  //   .populate('service');
  res.status(200).json(products)
})

// Create a new product
const createProduct = async (req, res) => {
  try {
    const {
      title,
      images,
      description,
      instagramLink,
      facebookLink,
      wordpressLink,
      twitterLink,
      service
    } = req.body
    const product = new Product({
      title,
      images,
      description,
      instagramLink,
      facebookLink,
      wordpressLink,
      twitterLink,
      service
    })
    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params
  const product = Product.findById(id)
  if (!product) {
    res.status(400)
    throw new Error('Product not found')
  }
  res.status(201).json(product)
})

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const {
      title,
      images,
      description,
      instagramLink,
      facebookLink,
      wordpressLink,
      twitterLink,
      service
    } = req.body
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        title,
        images,
        description,
        instagramLink,
        facebookLink,
        wordpressLink,
        twitterLink,
        service
      },
      { new: true }
    ).populate('service')
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
  getAllProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  getProduct
}
