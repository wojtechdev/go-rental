import Car from '../models/car.model.ts';
import type { CarFilters, CarInput } from '../types/car.types.ts';
import ApiFilters from '../utils/appFilters.ts';

export const getAllCars = async (filters: CarFilters, query: string) => {
  const apiFilters = new ApiFilters(Car).search(query).filters(filters);
  const cars = await apiFilters.model;
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

export const updateCar = async (id: string, carInput: CarInput) => {
  const car = await Car.findById(id);

  if (!car) {
    throw new Error('Car not found');
  }

  await car.set(carInput).save();

  return car;
};

export const deleteCar = async (id: string) => {
  const car = await Car.findById(id);

  if (!car) {
    throw new Error('Car not found');
  }

  await car.deleteOne();
  return true;
};
