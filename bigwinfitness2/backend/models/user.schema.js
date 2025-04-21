const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
mongoose.set('debug', true);

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true },
        username: { type: String, unique: true, required: true },
        status: {
            type: String,
            enum: ["requested", "invited", "member", "rejected"],
            default: "requested",
          },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true },
)

// upon saving the user using bcrypt library to hash password
userSchema.pre('save', async function (next) {
    try {
      if (!this.isModified('password')) return next();
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  });

// method we will need to check password is valid
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
