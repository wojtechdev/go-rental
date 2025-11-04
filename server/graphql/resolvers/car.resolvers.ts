import { createCar, deleteCar, getAllCars, getCarById, updateCar } from '../../controllers/car.controller.ts';
import type { CarInput } from '../../types/car.types.ts';

export const carResolvers = {
  Query: {
    getAllCars: async (parent: any) => await getAllCars(),
    getCarById: async (_: any, { carId }: { carId: string }) => await getCarById(carId),
  },
  Mutation: {
    createCar: async (_: any, { carInput }: { carInput: CarInput }) => {
      return await createCar(carInput);
    },
    updateCar: async (_: any, { carId, carInput }: { carId: string; carInput: CarInput }) => {
      return await updateCar(carId, carInput);
    },
    deleteCar: async (_: any, { carId }: { carId: string }) => {
      return await deleteCar(carId);
    },
  },
};
