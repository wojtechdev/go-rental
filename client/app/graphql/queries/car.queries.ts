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

export const GET_CAR_BY_ID = gql`
  query GetCarById($carId: ID!) {
    getCarById(carId: $carId) {
      id
      name
      description
      status
      rentPerDay
      address
      year
      power
      mileage
      brand
      transmission
      fuelType
      seats
      doors
      images {
        url
        public_id
      }
      category
      ratings {
        value
        count
      }
      createdAt
      updatedAt
    }
  }
`;
