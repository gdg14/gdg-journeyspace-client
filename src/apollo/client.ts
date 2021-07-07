import { ApolloClient, InMemoryCache } from '@apollo/client';
import { environment } from '../environment/environment.local';

export const client = new ApolloClient({
  uri: environment.api_server_url,
  cache: new InMemoryCache(),
});
