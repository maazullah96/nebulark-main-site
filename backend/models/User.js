const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name must be provided']
    },
    email: {
      type: String,
      required: [true, 'email must be provided'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'password must be provided'],
      unique: true
    },
    isAdmin: { type: String, required: true, default: false }
  },
  { timestamps: true }
)

const bcrypt = require('bcrypt')

UserSchema.pre('save', async function (req, res, nex) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)
