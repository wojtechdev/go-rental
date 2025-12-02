'use client';

import { ApolloProvider } from '@apollo/client/react';
import client from '../apollo/apolloClient';

interface ICustomApolloProviderProps {
  children: React.ReactNode;
}

const CustomApolloProvider: React.FC<ICustomApolloProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default CustomApolloProvider;
