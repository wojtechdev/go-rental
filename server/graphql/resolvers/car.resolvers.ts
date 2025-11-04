import { createCar, getAllCars } from '../../controllers/car.controller.ts';
import type { CarInput } from '../../types/car.types.ts';

export const carResolvers = {
  Query: {
    getAllCars: async (parent: any) => await getAllCars(),
  },
  Mutation: {
    createCar: async (_: any, { carInput }: { carInput: CarInput }) => {
      return await createCar(carInput);
    },
  },
};
