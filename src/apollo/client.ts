import { ApolloClient, InMemoryCache } from '@apollo/client';
import { environment } from '../environment/environment.local';

import calenderDate from '../stores/Calender';

export const client = new ApolloClient({
  uri: environment.api_server_url,
  cache: new InMemoryCache({
    typePolicies: {
      Calender: {
        fields: {
          getCalenderDate: {
            read() {
              return calenderDate;
            },
          },
        },
      },
    },
  }),
});
