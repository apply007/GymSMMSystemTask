const express =require( 'express');
const { getSchedules, createSchedule } =require( '../controllers/scheduleController.js');
const  authenticate  =require( '../middleware/authMiddleware.js');

const router = express.Router();
router.get('/', authenticate, getSchedules);
router.post('/', authenticate, createSchedule);

module.exports= router;
