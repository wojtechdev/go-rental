import mongoose from 'mongoose';
import Car from '../models/car.model.ts';
import { cars } from './data.ts';

const seedCars = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/go-rental');
    console.log('✔ MongoDB connected for seeding');

    await Car.deleteMany();
    console.log('✔ Existing cars deleted');

    await Car.insertMany(cars);
    console.log('✔ Cars seeded successfully');

    process.exit();
  } catch (error) {
    console.log('✖ Error seeding cars:', error);
    process.exit();
  }
};

seedCars();
