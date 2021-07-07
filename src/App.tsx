import React from "react";
import { ApolloProvider } from "@apollo/client";
import Router from "./Router";
import { client } from "./apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}
export default App;
