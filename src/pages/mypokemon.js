/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import React from 'react';
import {withRouter} from 'react-router-dom'
import {gql,useQuery} from '@apollo/client';
import {Loading, PokemonCard} from '../components';
import {Row,Col,Container,Button} from 'react-bootstrap'


function noAvailablePokemon(props){
   return <Container css={noAvailablePokemonStyle}>
            <p>You haven't caught any pokemons yet</p>
            <Button onClick={()=>props.history.push('/')}>Try Catch Pokemon Now</Button>
        </Container>
}
function MyPokemonList(props){
    var data = JSON.parse(localStorage.getItem(pokemonName))
    console.log(data)
    if (data.length<1) return noAvailablePokemon
    else {
      return <div>
          <Row>
          {data.myPokemonItems.length === 0? noAvailablePokemon(props):
          data.myPokemonItems.map((pokemon)=>{
              return <Col xs={6} sm={3}>
                <PokemonCard
                img={pokemon.image} 
                pokemon={pokemon.name} 
                owned={1} />
              </Col>
            })}
          </Row>
      </div>
    }
};

const noAvailablePokemonStyle = css`
padding: 15% 0;
font-weight: 700;
font-size: 2rem;
text-align:center;`

export default withRouter(MyPokemonList)