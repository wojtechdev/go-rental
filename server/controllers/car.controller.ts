import Car from '../models/car.model.ts';
import type { CarInput } from '../types/car.types.ts';

export const getAllCars = async () => {
  const cars = await Car.find();
  return cars;
};

export const createCar = async (carInput: CarInput) => {
  const newCar = await Car.create(carInput);
  return newCar;
};

export const getCarById = async (id: string) => {
  const car = await Car.findById(id);

  if (!car) {
    throw new Error('Car not found');
  }

  return car;
};
