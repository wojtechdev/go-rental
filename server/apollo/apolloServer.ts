import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { json, type Application } from 'express';

export async function startApolloServer(app: Application) {
  // Types, schemas, queries and mutations
  const typeDefs: any = [];
  // Implementation of queries or mutations
  const resolvers: any = [];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();

  app.use('/graphql', json(), expressMiddleware(apolloServer));
}
