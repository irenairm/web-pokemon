/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import React, {Fragment,useState} from 'react'
import {gql, useQuery} from '@apollo/client'
import {withRouter} from 'react-router-dom'
import {Row,Col, Container} from 'react-bootstrap'
import {Footer,Loading} from '../components'

export const GET_POKEMON = gql `
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

const Pokemon = (props) => {
    let name = props.match.params.pokemonName;
    const {data,loading,error} = useQuery(GET_POKEMON, {variables: {name}});
    if (loading) return <Loading />;
    if (error) return <p>Error: {error.message}</p>;
    return (
      <Fragment>
      <Row>
        <Col sm={5}>
          <div css={pokemonDetailCont}>
            <Row>
              <Col sm={12}><img css={pokemonImage} src={data.pokemon.sprites.front_default} /></Col>
              <Col sm={12}><p css={pokemonName}>{data.pokemon.name}</p></Col>
            </Row>
          </div>
          <div css={pokemonDetailCont}>
              <p css={cardName}>Types</p>
              <Row>
                {data.pokemon.types.map((type) =><Col xs={6}>
              <p css={pokemonType}>{type.type.name}</p>
              </Col>)}
              </Row>
          </div>
        </Col>
        <Col sm={7}>
          <p css={cardName}>Moves</p>
          <Row>
            {data.pokemon.moves.map((move) => <Col xs={6}>
              <p css={pokemonType}>{move.move.name}</p>
              </Col>)}
          </Row>
        </Col>
      </Row>
      <Footer name={data.pokemon.name}></Footer>
      </Fragment>
    );
}
const pokemonDetailCont = css `
margin-bottom:5rem;
justify-content: center;
text-align:center;
`
const pokemonImage = css
`
  padding: 10px 10px;
  margin-top:32px;
  margin-bottom: 16px;
  width:150px;
  font-size: 20px;
  border-radius: 100px;
  border: 1px solid #0000;
  color: black;
  font-weight: bold;
  box-shadow: 0 10px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.14);
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`
const pokemonName = css
`position:absolute;
z-index:10;
top: -2rem;
left:25%;
background-color: #3B4CCA;
border-radius: 10px;
padding: 15px;
border: 1px solid #0000;
width: 50%;
text-align:center;
font-size:20px;
font-weight:650;
color: #ffff;
`
const cardName = css `
background-color: #ffdb58;
width: 200px;
padding: 10px;
border-radius: 15px;
font-weight: 650;
font-size: 20px;
text-align:center;
margin: 0 auto;
margin-bottom: 1rem;
box-shadow: 0 10px 10px rgba(0,0,0,.04), 0 0 6px rgba(0,0,0,.10);
`
const pokemonType = css`
text-align:center;
background-color:#0000;
padding: 15px 10px;
border-radius: 15px;
box-shadow: 0 10px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.14);
width: 150px;
margin:0 auto;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
`

export default withRouter(Pokemon);