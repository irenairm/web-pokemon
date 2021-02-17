import React from 'react';
import Pokemon from '../pokemon';
import { render, screen } from '@testing-library/react';
import { cache } from "../../cache";
import { ApolloClient, ApolloProvider, gql } from "@apollo/client";
import {BrowserRouter as Router} from 'react-router-dom'
 
describe('Pokemon', () => {
  test('renders Pokemon page', () => {
    
    const typeDefs = gql `
    extend type Query{
    myPokemonItems: [ID!]!
    }`

      // Initialize ApolloClient
    const client = new ApolloClient({
        cache,
        uri: "https://graphql-pokeapi.vercel.app/api/graphql",
        typeDefs
    });
    render(<ApolloProvider client={client}>
        <Router><Pokemon /></Router>
      </ApolloProvider>)
 
    screen.debug();
  });
});