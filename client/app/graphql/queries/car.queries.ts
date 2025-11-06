import { gql } from '@apollo/client';

export const GET_ALL_CARS = gql`
  query GetAllCars {
    getAllCars {
      category
      brand
      images {
        url
        public_id
      }
      fuelType
      id
      transmission
      name
      rentPerDay
      ratings {
        value
        count
      }
    }
  }
`;
