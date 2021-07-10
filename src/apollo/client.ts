import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { environment } from '../environment/environment.local';

import calenderDate, { nowMonthDiaries } from '../stores/Calender';

export const client = new ApolloClient({
  uri: `http://${process.env.REACT_APP_BASE_URL}:8080/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      Calender: {
        fields: {
          getCalenderDate: {
            read() {
              return calenderDate;
            },
          },
          getDiariesByMonth: {
            read() {
              return nowMonthDiaries;
            },
          },
        },
      },
    },
  }),
});
