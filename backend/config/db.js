const mongoose = require('mongoose')

const connectDB = (url) => {
  console.log(`url ==> ${url}`)
  return mongoose
    .connect(url)
    .then((res) => {
      console.log('Connected to DB')
    })
    .catch((error) => {
      console.log('Error connecting to DB', error)
      process.exit(1)
    })
}

module.exports = connectDB
