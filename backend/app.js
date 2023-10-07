const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')

const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')

const userRoutes = require('./routes/userRoutes')
const serviceRoutes = require('./routes/serviceRoutes')
const productRoutes = require('./routes/productRoutes')
const aboutUsRoutes = require('./routes/aboutUsRoutes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('tiny'))
app.use(cookieParser())

app.use(cors({}))
const PORT = process.env.PORT
console.log(`PORT ==> ${PORT}`)

app.get('/', (req, res) => {
  res.status(200).json({ body: 'Hello' })
})

app.use('/api/users', userRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/products', productRoutes)
app.use('/api/about-us', aboutUsRoutes)

app.use(notFound)
app.use(errorHandler)

const start = async () => {
  await connectDB(process.env.MONGO_URI)

  app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
  })
}

start()
