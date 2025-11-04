import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Please enter car name'] },
    description: { type: String, required: [true, 'Please enter car description'] },
    status: { type: String, default: 'Draft' },
    rentPerDay: { type: Number, required: [true, 'Please enter rent per day'] },
    address: { type: String, required: [true, 'Please enter address'] },
    images: [{ url: String, public_id: String }],
    brand: { type: String, required: [true, 'Please enter car brand'] },
    year: { type: Number, required: [true, 'Please enter car year'] },
    transmission: { type: String, required: [true, 'Please enter transmission type'] },
    mileage: { type: Number, required: [true, 'Please enter car mileage'] },
    power: { type: Number, required: [true, 'Please enter car power'] },
    seats: { type: Number, required: [true, 'Please enter number of seats'] },
    doors: { type: Number, required: [true, 'Please enter number of doors'] },
    fuelType: { type: String, required: [true, 'Please enter fuel type'] },
    category: { type: String, required: [true, 'Please enter car category'] },
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

const Car = mongoose.model('Car', carSchema);

export default Car;
