import React from 'react';
import PokemonList from '../pokemonlist';
import { render, screen } from '@testing-library/react';
import { cache } from "../../cache";
import { ApolloClient, ApolloProvider, gql } from "@apollo/client";
import {BrowserRouter as Router} from 'react-router-dom'

describe('PokemonList', () => {
  test('renders PokemonList page', () => {

    const typeDefs = gql `
    extend type Query{
    myPokemonItems: [ID!]!
    }`

    const client = new ApolloClient({
        cache,
        uri: "https://graphql-pokeapi.vercel.app/api/graphql",
        typeDefs
    });
    render(<ApolloProvider client={client}>
        <Router><PokemonList /></Router>
      </ApolloProvider>)
 
    screen.debug();
  });
});