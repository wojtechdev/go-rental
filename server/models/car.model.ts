import mongoose from 'mongoose';
import { CarStatus, CarBrand, CarCategories, CarFuelTypes, CarTransmissions, CarDoors, CarSeats, type ICar } from '@go-rental/shared';

const carSchema = new mongoose.Schema<ICar>(
  {
    name: { type: String, required: [true, 'Please enter car name'] },
    description: { type: String, required: [true, 'Please enter car description'] },
    status: {
      type: String,
      default: CarStatus.Draft,
      enum: {
        values: Object.values(CarStatus),
      },
    },
    rentPerDay: { type: Number, required: [true, 'Please enter rent per day'] },
    address: { type: String, required: [true, 'Please enter address'] },
    images: [{ url: String, public_id: String }],
    brand: {
      type: String,
      required: [true, 'Please enter car brand'],
      enum: {
        values: Object.values(CarBrand),
      },
    },
    year: { type: Number, required: [true, 'Please enter car year'] },
    transmission: {
      type: String,
      required: [true, 'Please enter transmission type'],
      enum: {
        values: Object.values(CarTransmissions),
      },
    },
    mileage: { type: Number, required: [true, 'Please enter car mileage'] },
    power: { type: Number, required: [true, 'Please enter car power'] },
    seats: {
      type: Number,
      required: [true, 'Please enter number of seats'],
      enum: {
        values: Object.values(CarSeats),
      },
    },
    doors: {
      type: Number,
      required: [true, 'Please enter number of doors'],
      enum: {
        values: Object.values(CarDoors),
      },
    },
    fuelType: {
      type: String,
      required: [true, 'Please enter fuel type'],
      enum: {
        values: Object.values(CarFuelTypes),
      },
    },
    category: {
      type: String,
      required: [true, 'Please enter car category'],
      enum: {
        values: Object.values(CarCategories),
      },
    },
    reviews: [String],
  },
  { timestamps: true }
);

carSchema.virtual('ratings').get(function () {
  return {
    value: 5,
    count: 10,
  };
});

const Car = mongoose.model<ICar>('Car', carSchema);

export default Car;
