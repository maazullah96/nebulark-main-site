const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: { type: 'String', required: true },
  images: [{ type: 'String' }],
  description: {
    type: 'String'
  },
  instagram: {
    type: 'String'
  },
  facebook: {
    type: 'String'
  },
  wordpress: {
    type: 'String'
  },
  twitter: {
    type: 'String'
  },
  service: { type: mongoose.Types.ObjectId, required: true, ref: 'Service' }
})

module.exports = mongoose.model('Product', productSchema)
