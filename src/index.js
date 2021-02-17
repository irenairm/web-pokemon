// from https://www.apollographql.com/docs/tutorial/queries/
import { ApolloClient, NormalizedCacheobject, ApolloProvider, gql } from "@apollo/client";
import { cache } from "./cache";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom'
import Pages from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';

export const typeDefs = gql `
extend type Query{
  myPokemonItems: [ID!]!
}`
// Initialize ApolloClient
const client = new ApolloClient({
  cache,
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  typeDefs
});


// Pass the ApolloClient instance to the ApolloProvider component
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
