import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
query rates($currency:  String!) {
  rates(currency: $currency){
    rate
    name
    currency
  }
}
`;

function Home() {
  const moviesResult = useQuery(GET_MOVIE, { variables: {"currency": "test"}});
  console.log(moviesResult.data)
  return (
    <div>
      test
    </div>
  );
}

export default Home;
