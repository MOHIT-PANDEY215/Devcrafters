const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET all students
router.get('/', async (req, res) => {
  try {
    const students = await User.find();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;