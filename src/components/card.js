/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import {withRouter} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const handleRelease = (pokemons,names) => {
  var pokemonList = JSON.parse(localStorage.getItem('myPokemonItems'))

  if (pokemonList){
    var added = pokemonList.map((pokemon) => pokemon.pokemon.localeCompare(pokemons)===0?pokemon:false) .filter((data)=>data!=false)
    console.log(added)
    //pernah ditambahin
    if (added){
      var owned = added.map((pokemon)=>pokemon.owned)[0]
      if (owned.includes(names)){
        var index = owned.indexOf(names);
        owned.splice(index,1);

        if (owned.length===0){
          var pokemonIndex = pokemonList.indexOf(added[0])
          pokemonList.splice(pokemonIndex,1);
        }
        console.log(pokemonList)
        localStorage.setItem('myPokemonItems',JSON.stringify(pokemonList))
        document.location.reload()
      }
    }
  }
}
function pokemonNames(props,pokemons,names){
  return <div css={pokemonNamesCard}>
    <Button onClick={()=>{
        handleRelease(pokemons,names)
      }} css={releaseStyle} variant="outline-info"><span>{names}</span></Button> 
  </div>
}

function PokemonCard(props){
  const disabled = props.disabled
  const handleClick = () => {props.history.push(`/pokemon/${props.pokemon}`)}
    return <div onClick={disabled?null:()=>handleClick()}
    css={card}>
        <img css={img} src={props.img} alt='pokemon-img'></img>
        <p css={pokemon}>{props.pokemon}</p>
        <p css={owned}>owned: <span>{props.owned}</span></p>
        {disabled?
        props.names.map((a)=>pokemonNames(props,props.pokemon,a)):null}
    </div>
}

const card = css
` padding: 10px;
    margin-top:32px;
  margin-bottom: 16px;
  background-color: #0000;
  width:90%;
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
background-color: #ffdb58;
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
const pokemonNamesCard = css
` font-size: 16px;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  text-align:center;
`
const releaseStyle = css `
&:hover span{
  display:none
}
&:hover:before {
  content: 'Release'
}
`
export default withRouter(PokemonCard);