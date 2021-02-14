/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import React, {useState} from 'react'
import { Modal,Button, Form, Container } from "react-bootstrap";
import {withRouter} from 'react-router-dom'

const CatchPokemon = (props) => {
    const [myPokemonName,setMyPokemonName] = useState("")
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
      </Modal.Body>
      <Modal.Footer>
        {getPokemon?
        (<Button onClick= {()=>{
          while (localStorage.getItem("pokemon",`${props.name}/${myPokemonName}`)){
            <p>Already named this pokemon with this name!</p>
          }
          (localStorage.setItem("pokemon",`${props.name}/${myPokemonName}`)
          props.history.push(`/mylist`))
        }}>Save Name</Button>): (<Button onClick={props.onHide}>Okay</Button>)}
      </Modal.Footer>
    </Modal>
    );
}

const form = css`
text-align:center;`

export default withRouter(CatchPokemon);