export enum CarStatus {
  Draft = 'Draft',
  Active = 'Active',
}

export enum CarBrand {
  Audi = 'Audi',
  BMW = 'BMW',
  Ford = 'Ford',
  Honda = 'Honda',
  Hyundai = 'Hyundai',
  Nissan = 'Nissan',
  Toyota = 'Toyota',
}

export enum CarCategories {
  Sedan = 'Sedan',
  Convertible = 'Convertible',
  SUV = 'SUV',
  Hatchback = 'Hatchback',
}

export enum CarFuelTypes {
  Petrol = 'Petrol',
  Diesel = 'Diesel',
}

export enum CarTransmissions {
  Automatic = 'Automatic',
  Manual = 'Manual',
}

export enum CarDoors {
  Two = 2,
  Four = 4,
}

export enum CarSeats {
  Two = 2,
  Four = 4,
  Five = 5,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
}

export interface ICarImage {
  url: string;
  public_id: string;
}

export interface ICarRatings {
  value: number;
  count: number;
}

export interface ICar {
  id: string;
  name: string;
  description: string;
  status: CarStatus;
  rentPerDay: number;
  address: string;
  images: ICarImage[];
  brand: CarBrand;
  year: number;
  transmission: CarTransmissions;
  mileage: number;
  power: number;
  seats: CarSeats;
  doors: CarDoors;
  fuelType: CarFuelTypes;
  category: CarCategories;
  ratings: ICarRatings;
  createdAt: string;
  updatedAt: string;
  reviews: string[];
}
