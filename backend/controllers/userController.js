const User = require('../models/User')
const generateToken = require('../utils/generateToken')
const asyncHandler = require('../middleware/asyncHandler')

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already Exists')
  }
  const user = await User.create({ name, email, password })
  if (user) {
    console.log('user created')
    generateToken(res, user._id)
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(400)
    throw new Error('Invalid User data')
  }
})

const login = asyncHandler(async (req, res) => {
  res.status(200).json('Login Route')
})

//post method to logout
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json('Logout Successfully')
})

//get User Profile Data through token
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json('get User Profile')
})

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json('update User Profile through Token')
})

const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json('get All Users')
})

const getUserByID = asyncHandler(async (req, res) => {
  res.status(200).json('GET User By ID')
})

const updateUser = asyncHandler(async (req, res) => {
  res.send('Update User by ID')
})

const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json('Deleted User Successfully')
})

module.exports = {
  register,
  login,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  updateUser,
  deleteUser
}
