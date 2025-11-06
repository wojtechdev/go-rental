import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { json, type Application } from 'express';
import { carTypeDefs } from '../graphql/typeDefs/car.typeDefs.ts';
import { carResolvers } from '../graphql/resolvers/car.resolvers.ts';
import cors from 'cors';

export async function startApolloServer(app: Application) {
  // Types, schemas, queries and mutations
  const typeDefs = [carTypeDefs];
  // Implementation of queries or mutations
  const resolvers = [carResolvers];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();

  const corsOptions = {
    credentials: true,
    origin: [process.env.CLIENT_URL || 'http://localhost:3000'],
  };

  app.use('/graphql', cors(corsOptions), json(), expressMiddleware(apolloServer));
}
