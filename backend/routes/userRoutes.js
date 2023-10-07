const express = require('express')

const router = express.Router()

const {
  register,
  login,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  updateUser,
  deleteUser
} = require('../controllers/userController')

router.route('/').post(register).get(getUsers)
router.route('/login').post(login)
router.route('/logout').post(logoutUser)

router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').get(getUserByID).put(updateUser).delete(deleteUser)

module.exports = router
