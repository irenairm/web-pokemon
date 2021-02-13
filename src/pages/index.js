/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from '@emotion/react'
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  Header  from '../components/header';
import PokemonList from './pokemonlist';
import Pokemon from './pokemon';
import MyPokemonList from './mypokemon';


export default function Pages() {
  return (
    <Fragment>
      <Global styles={body}/>
      <Header></Header>
        <Router primary={false} component={Fragment}>
          <Route exact path="/" component={PokemonList} />
          <Route path="/pokemon/:pokemonName" component={Pokemon}/>
          <Route path="/mylist" component={MyPokemonList}/>
        </Router>
    </Fragment>
  );
}

const body=css`
body{
  padding-top:70px;
}
`