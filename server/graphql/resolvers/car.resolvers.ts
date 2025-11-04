import { createCar, getAllCars, getCarById } from '../../controllers/car.controller.ts';
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
  },
};
