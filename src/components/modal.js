/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import React, {useState} from 'react'
import { Modal,Button, Form, Container } from "react-bootstrap";
import {withRouter} from 'react-router-dom'

function saveData(pokemonName,myPokemonName,image){
  var pokemonList = JSON.parse(localStorage.getItem('myPokemonItems'))
  var data = []
  // add to local storage for the first time
  if (!pokemonList){
    var myPokemon= [];
    myPokemon.push(myPokemonName);
    var pokemon = {
      "pokemon":pokemonName,
      "image":image,
      "owned":myPokemon
    }
    data.push(JSON.stringify(pokemon))
    localStorage.setItem('myPokemonItems',data)
  }
  else{
    // cek udah pernah ditambahin atau belum
    data.push(pokemonList)
    var added = data.map((pokemon) => pokemon.pokemon.localeCompare(pokemonName)===0?pokemon:false)
    console.log(added)
    //pernah ditambahin
    if (added){
      var owned = added.map((pokemon)=>pokemon.owned)[0]
      if (owned.includes(myPokemonName)){
        // cek owned : pernah owned
        return false
      }
      else {
        // cek owned : blm pernah owned
        owned.push(myPokemonName)
        localStorage.setItem('myPokemonItems',JSON.stringify(pokemonList))
        console.log(pokemonList)
        return true
      }
    }
    else{
      //belum pernah ditambahin
      var myPokemon= [];
      myPokemon.push(myPokemonName);
      var pokemon = {
        "pokemon":pokemonName,
        "image":image,
        "owned":myPokemon
      }
      data.push(JSON.stringify(pokemon))
      localStorage.setItem('myPokemonItems',data)
    }
  }
}
const CatchPokemon = (props) => {
    const [myPokemonName,setMyPokemonName] = useState("")
    const [showErrorMessage,setErrorMessage] = useState(false)
    var getPokemon = props.probability>=50?true:false;

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            {getPokemon?'Yay! Catch succeeded!': 'Sorry, better luck next time'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body css={form}>
          {getPokemon?
            ( <Container>
                <h4>Congratulations, you got {props.name}! </h4>
            <Form>
                <Form.Group controlId="formGroupPokemonName">
                    <Form.Label>Give your Pokemon a name</Form.Label>
                    <Form.Control type="text" placeholder="Pokemon name" 
                    onChange = {e => setMyPokemonName(e.target.value)}/>
                </Form.Group>
            </Form>
            </Container>):
            (<p>The pokemon ran away... try again some other time</p>)
        }
        {showErrorMessage?<p>Name already existed!</p>:null}
      </Modal.Body>
      <Modal.Footer>
        {getPokemon?
        (<Button onClick= {()=>{
          if (!saveData(props.name,myPokemonName,props.image)){
            setErrorMessage(true)
          }
          else{
            props.history.push(`/mylist`)
          }
          }}>Save Name</Button>): (<Button onClick={props.onHide}>Okay</Button>)}
      </Modal.Footer>
    </Modal>
    );
}

const form = css`
text-align:center;`

export default withRouter(CatchPokemon);