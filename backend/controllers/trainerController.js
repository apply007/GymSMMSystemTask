const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const getTrainers = async (req, res) => {
  try {
    const trainers = await User.find({ role: "trainer" });
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trainers", error });
  }
};

const addTrainer = async (req, res) => {
  const { fullName, email, password, role } = req.body;
  

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const trainer = new User({
      fullName,
      email,
      password: hashedPassword,
      role,
    });
    await trainer.save();

    res.status(201).json({ message: "Trainer added successfully", trainer });
  } catch (error) {
    res.status(500).json({ message: "Error adding trainer...", error });
  }
};

module.exports = { getTrainers, addTrainer };
