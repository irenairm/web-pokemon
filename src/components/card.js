/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import {withRouter} from 'react-router-dom'

function PokemonCard(props){
    return <div onClick={()=>props.history.push(`/pokemon/${props.pokemon}`)}
    css={card}>
        <img css={img} src={props.img} alt='pokemon-img'></img>
        <p css={pokemon}>{props.pokemon}</p>
        <p css={owned}>owned: <span>{props.owned}</span></p>
    </div>
}

const card = css
` padding: 10px;
    margin-top:32px;
  margin-bottom: 16px;
  background-color: #0000;
  width:190px;
  font-size: 20px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  box-shadow: 0 10px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.14);
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`
const owned = css`
font-family: PT Sans;
background-color: yellow;
border-radius: 10px;
font-size: 15px;
text-align: center;
text-transform: uppercase;
width: 110px;
margin: 0 auto;
padding: 5px 0px;
`

const img = css`
width: 100%;
height: 100%;
`
const pokemon = css `
text-align:center;
`

export default withRouter(PokemonCard);