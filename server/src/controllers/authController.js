const bcrypt = require('bcryptjs');
const {createSecretToken} = require("../util/SecretToken")
const User = require('../models/user');

const register = async (req, res, next) => {
  try {
    const { email, password, confirmPassword, name,role } = req.body;

    // Check if all fields are present
   
  if (!name || !email || !password || !confirmPassword||!role) {
    return res.status(400).json({ 
      message: 'All fields are required.'
     });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match.' });
  }

  if (!['admin', 'student', 'teacher'].includes(role)) {
    return res.status(400).json({ error: 'Invalid role' });
  }

    // check if user with email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }
    const user= await User.create({email,password,name,role})
    const token= createSecretToken(user._id)
    res.cookie("token",token,{
      withCredentials:true,
      httpOnly:false,
    })
    res.status(201).json({ message: 'User created successfully' });
    next()
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // compare password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // generate jwt token and send to client
    const token= createSecretToken(user._id)

    res.cookie("token",token,{
      withCredentials:true,
      httpOnly:false,
    })
    res.status(201).json({token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }});
  } catch (err) {
    next(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("t")
  return res.status('200').json({
    message: "signed out"
  })
}

module.exports = { register, login, logout };
