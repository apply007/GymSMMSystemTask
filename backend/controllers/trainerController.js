const User=require('../models/User.js');

 const getTrainers = async (req, res) => {
  try {
    const trainers = await User.find({ role: 'trainer' });
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trainers', error });
  }
};

 const addTrainer = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const trainer = new User({ fullName, email, password: hashedPassword, role: 'trainer' });
    await trainer.save();

    res.status(201).json({ message: 'Trainer added successfully', trainer });
  } catch (error) {
    res.status(500).json({ message: 'Error adding trainer', error });
  }
};

module.exports={getTrainers,addTrainer}