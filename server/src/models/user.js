const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
});

// Hash password before saving to database
// userSchema.pre('save', async function (next) {
//   const user = this;

//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }

//   next();
// });

// Static method to login user
// userSchema.statics.findByCredentials = async (email, password) => {
//   const user = await User.findOne({ email });

//   if (!user) {
//     throw new Error('Invalid login credentials');
//   }

//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) {
//     throw new Error('Invalid login credentials');
//   }

//   return user;
// };

const User = mongoose.model('User', userSchema);

module.exports = User;
