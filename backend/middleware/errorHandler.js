const errorHandler = (error, req, res, next) => {
  console.log(`error ==>${error}`)
  let statusCode = req.statusCode === 200 ? 500 : res.statusCode
  let message = error.message
  if (error.name == 'CastError' && error.kind === 'ObjectId') {
    message = `Reseource not found`
    statusCode = 404
  }
  res
    .status(statusCode)
    .json({ message, stack: process.env.NODE_ENV ? '' : error.stack })
}

module.exports = errorHandler
