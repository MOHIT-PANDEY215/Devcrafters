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
  role: {
    type: String,
    enum: ['admin', 'student', 'teacher'],
    required: true,
  },
});

userSchema.pre("save", async function(next){
  try{
    if(this.isModified('password'))
    this.password=await bcrypt.hash(this.password,10)
    next()
  } catch(err){
    next(err);
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
