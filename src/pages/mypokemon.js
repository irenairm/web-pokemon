/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import React, {Fragment} from 'react';
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
    var pokemonList = JSON.parse(localStorage.getItem('myPokemonItems'))
    var data = []
    data.push(pokemonList)

    console.log(data)
    if (data[0]===null) return noAvailablePokemon(props)
    else {
      
      return <Fragment>
      <Container><Row>
          { data.map((pokemon)=>{
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