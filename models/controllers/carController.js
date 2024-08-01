const Car = require('../models/car');

exports.createCar = async (req, res) => {
  const { carName, manufacturingYear, price } = req.body;

  try {
    const car = new Car({ carName, manufacturingYear, price });
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCarById = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateCar = async (req, res) => {
  const { id } = req.params;
  const { carName, manufacturingYear, price } = req.body;

  try {
    const car = await Car.findByIdAndUpdate(id, { carName, manufacturingYear, price }, { new: true });
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteCar = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findByIdAndDelete(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
