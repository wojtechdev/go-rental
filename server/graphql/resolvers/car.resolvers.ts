export const carResolvers = {
  Query: {
    getAllCars: async (parent: any) => {
      return 'Hello from getAllCars resolver';
    },
  },
};
