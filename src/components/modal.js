/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import React, {useState, useEffect} from 'react'
import { Modal,Button, Form, Container } from "react-bootstrap";
import {withRouter} from 'react-router-dom'
import pokemon from '../pages/pokemon';

function checkNameExist(pokemonName,myPokemonName){
  var pokemonList = JSON.parse(localStorage.getItem('myPokemonItems'))
  var data = []

  if (!pokemonList){
    return true
  }
  else{
    // cek udah pernah ditambahin atau belum
    // data.push(pokemonList)
    console.log(pokemonList)
    var added = pokemonList.map((pokemon) => pokemon.pokemon.localeCompare(pokemonName)===0?pokemon:null)
    .filter((data)=>data!=null)
    console.log(added)
    //pernah ditambahin
    if (added[0]){
      var owned = added.map((pokemon)=>pokemon.owned)[0]
      console.log(owned)
      if (owned.includes(myPokemonName)){
        // cek owned : pernah owned
        return false
      }
      else {
        // cek owned : blm pernah owned
        return true
      }
    }
    else{
      //belum pernah ditambahin
      return true
    }
  }
}
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
    data.push((pokemon))
    localStorage.setItem('myPokemonItems',JSON.stringify(data))
    console.log('add first time',data)
  }
  else{
    // cek udah pernah ditambahin atau belum
    var added = pokemonList.map((pokemon) => pokemon.pokemon.localeCompare(pokemonName)===0?pokemon:null).filter((data)=>data!=null)
    console.log(added)
    //pernah ditambahin
    if (added[0]){
      var owned = added.map((pokemon)=>pokemon.owned)[0]
      if (owned.includes(myPokemonName)){
      }
      else {
        owned.push(myPokemonName)
        localStorage.setItem('myPokemonItems',JSON.stringify(pokemonList))
        console.log('pernah ditambahin',pokemonList)
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
      pokemonList.push((pokemon))
      console.log('blm pernah ditambahin')
      localStorage.setItem('myPokemonItems',JSON.stringify(pokemonList))
    }
  }
}
const CatchPokemon = (props) => {
    const [myPokemonName,setMyPokemonName] = useState("")
    const [errorMessage,setErrorMessage] = useState("")
    const [formValid,setFormValid] = useState(false)

    const handleChange = (e) => {
      const value = e.target.value
      setMyPokemonName(value)
    }
    useEffect(()=>{
      let fieldValidationError = errorMessage;
      let nameValid = formValid;
      
      nameValid = checkNameExist(props.name,myPokemonName)
      fieldValidationError = nameValid? '':'Name already existed!';
      setErrorMessage(fieldValidationError)
      setFormValid(nameValid)

    },[myPokemonName])

    var getPokemon = props.probability>=5?true:false;
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
                    onChange = {e => handleChange(e)}
                    value={myPokemonName || ''}/>
                </Form.Group>
            </Form>
            </Container>):
            (<p>The pokemon ran away... try again some other time</p>)
        }
        <p>{errorMessage}</p>
      </Modal.Body>
      <Modal.Footer>
        {getPokemon?
        (<Button onClick= {()=> {
          if (checkNameExist(props.name,myPokemonName)) {
            saveData(props.name,myPokemonName,props.image)
            props.history.push(`/mylist`)
          }
        } }
        disabled={!formValid}>Save Name</Button>): (<Button onClick={props.onHide}>Okay</Button>)}
      </Modal.Footer>
    </Modal>
    );
}

const form = css`
text-align:center;`

export default withRouter(CatchPokemon);