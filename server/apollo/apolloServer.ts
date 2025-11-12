import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { json, type Application } from 'express';
import { carTypeDefs } from '../graphql/typeDefs/car.typeDefs.ts';
import { carResolvers } from '../graphql/resolvers/car.resolvers.ts';
import cors from 'cors';
import type { CorsOriginCallback, LocalCorsOptions } from '../types/apolloServer.types.ts';

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

  const allowedOrigin = process.env.CLIENT_URL || 'http://localhost:3000';
  if (!process.env.CLIENT_URL) {
    console.warn('[CORS] process.env.CLIENT_URL is not set. Falling back to http://localhost:3000');
  }

  const corsOptions: LocalCorsOptions = {
    credentials: true,
    origin: function (origin: string | undefined, callback: CorsOriginCallback): void {
      if (!origin) return callback(null, true);
      if (origin === allowedOrigin) {
        return callback(null, true);
      } else {
        return callback(new Error('Not allowed by CORS'), false);
      }
    },
  };

  app.use('/graphql', cors(corsOptions), json(), expressMiddleware(apolloServer));
}
