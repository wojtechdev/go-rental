import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    let connectionString = '';

    if (process.env.NODE_ENV === 'production') {
      connectionString = process.env.MONGO_URI!;
    } else {
      connectionString = process.env.MONGO_URI_LOCAL!;
    }
    mongoose.connect(connectionString).then(() => {
      console.log('Database connected successfully');
    });
  } catch (error) {
    console.error('Database connection error:', error);
  }
};
