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
