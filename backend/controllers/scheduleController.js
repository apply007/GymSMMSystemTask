const Schedule =require( '../models/Schedule.js');

 const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find().populate('trainer').populate('trainees');
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schedules', error });
  }
};

 const createSchedule = async (req, res) => {
  const { date, time, trainer } = req.body;

  try {
    const scheduleCount = await Schedule.find({ date }).countDocuments();
    if (scheduleCount >= 5) return res.status(400).json({ message: 'Maximum 5 schedules per day' });

    const newSchedule = new Schedule({ date, time, trainer });
    await newSchedule.save();

    res.status(201).json({ message: 'Schedule created successfully', newSchedule });
  } catch (error) {
    res.status(500).json({ message: 'Error creating schedule', error });
  }
};


module.exports={getSchedules,createSchedule}