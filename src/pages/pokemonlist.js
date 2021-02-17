/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import React, {Fragment, useState} from 'react'
import {gql, useQuery} from '@apollo/client'
import {PokemonCard,Loading }from '../components'
import {Row,Col,Container} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

export const GET_POKEMON_LIST = gql`
query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        url
        name
        image
      }
    }
}`;

export function PokemonList() {
    const {data,loading,error,fetchMore} = useQuery(GET_POKEMON_LIST);
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    if (loading) return <Loading />;
    if (error) return <p>Error: {error.message}</p>;

    var pokemonList = JSON.parse(localStorage.getItem('myPokemonItems'))

    return (<Fragment>
      <Container>
      <Row>
          {
          data.pokemons.results.map((pokemon)=>{
            var res = pokemonList!==null?(pokemonList.map((dt)=>dt.pokemon.localeCompare(pokemon.name)===0?dt.owned.length:null))
            .filter((data)=>data!=null)[0]:null
              return <Col xs={6} sm={3}>
                <PokemonCard
                img={pokemon.image} 
                pokemon={pokemon.name} 
                owned={res?res:0} />
              </Col>
            })
          }
      </Row>
      {
      data.pokemons && data.pokemons.nextOffset < data.pokemons.count && 
      ( isLoadingMore? <p>Loading...</p> :
        <button 
        css ={loadButton}
        onClick={async () => {
          setIsLoadingMore(true);
          await fetchMore({
            variables: {
              offset: data.pokemons.nextOffset
            }
          });
      setIsLoadingMore(false);
        }}>Load More</button>)
      }
      </Container>
    </Fragment>
    );
}

const loadButton = css
`
padding: 10px;
    margin-top:32px;
  margin-bottom: 16px;
  width:fit-content;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid #ffdb58;
  background-color: #ffdb58;
  color: black;
  font-weight: bold;
  box-shadow: 0 10px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.14);
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`
export default withRouter(PokemonList);