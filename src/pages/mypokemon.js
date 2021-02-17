/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import {PokemonCard} from '../components';
import {Row,Col,Container,Button} from 'react-bootstrap'


function noAvailablePokemon(props){
   return <Container css={noAvailablePokemonStyle}>
            <p>You haven't caught any pokemons yet</p>
            <Button onClick={()=>props.history.push('/')}>Try Catch Pokemon Now</Button>
        </Container>
}
function MyPokemonList(props){
    var pokemonList = JSON.parse(localStorage.getItem('myPokemonItems'))
    console.log(pokemonList)

    if (pokemonList===null||pokemonList.length===0) return noAvailablePokemon(props)
    else {
      return <Fragment>
      <Container><Row>
          { pokemonList.map((pokemon)=>{
              return <Col xs={6} sm={3}>
                <PokemonCard
                disabled = {true}
                img={pokemon.image} 
                pokemon={pokemon.pokemon} 
                owned={pokemon.owned.length}
                names = {pokemon.owned} />
              </Col>
            })}
          </Row>
          </Container>
          </Fragment>
    }
};

const noAvailablePokemonStyle = css`
padding: 15% 0;
font-weight: 700;
font-size: 2rem;
text-align:center;`

export default withRouter(MyPokemonList)