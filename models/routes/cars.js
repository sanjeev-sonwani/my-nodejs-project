const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const authMiddleware = require('./middlewares/authMiddleware');

router.use(authMiddleware.authenticate);

router.post('/', carController.createCar);
router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;
