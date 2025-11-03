import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/dbConnect.ts';
import { startApolloServer } from './apollo/apolloServer.ts';

dotenv.config({ path: 'config/.env.local' });

const app = express();
app.use(express.json());

dbConnect();

const PORT = process.env.PORT || 4000;

async function startServer() {
  await startApolloServer(app);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
  });
}

startServer();
