const mongoose = require('mongoose')

const AboutUsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  socialMedia: [
    {
      platform: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      }
    }
  ],
  contact: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String
    },
    address: {
      type: String
    }
  },
  whyChooseUs: {
    type: [String],
    required: true
  },
  values: [
    {
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('AboutUs', AboutUsSchema)
