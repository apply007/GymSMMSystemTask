const express=require( 'express');
const { getTrainers, addTrainer,deleteTrainer } =require ('../controllers/trainerController.js');
const  authenticate  =require ('../middleware/authMiddleware.js');

const router = express.Router();
router.get('/', authenticate, getTrainers);
router.post('/', authenticate, addTrainer);
router.delete('/:id', authenticate, deleteTrainer);

module.exports= router;
