export type CarInput = {
  name: string;
  description: string;
  rentPerDay: number;
  address: string;
  images: [string];
  brand: string;
  year: number;
  transmission: string;
  mileage: number;
  power: number;
  seats: number;
  doors: number;
  fuelType: string;
  category: string;
};

export type RentFilter = {
  gt: number;
  gte: number;
  lt: number;
  lte: number;
};

export type CarFilters = {
  category: string;
  brand: string;
  transmission: string;
  status: string;
  rentPerDay: RentFilter;
};
