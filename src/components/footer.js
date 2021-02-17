/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import {useState} from 'react'
import {withRouter} from 'react-router-dom'
import ball from '../assets/ball.png'
import ModalProp from './modal'


export function Footer(props){
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);
    var x = Math.ceil(Math.random()*10);

    return (<>
            <div css={footer} onClick={()=> handleShow()}>
                <img css={brand} src={ball}></img><p>Catch</p>
            </div>

            <ModalProp 
            probability = {x}
            name= {props.name}
            image = {props.image}
            show={show} 
            onHide = {()=>handleClose()}/>
            </>
            )
}

const footer = css`
display:block;
position: fixed;
left: 40%;
right: 40%;
bottom: 0;
width:220px;
text-align:center;
padding-top:.75rem;
margin-bottom: 0;
border-radius: 10px;
background-color: #ffdb58;
font-weight: 700;
font-size: 20px;
text-transform: uppercase;
font-family: Monaco;
align-items:center;
&:hover{
    cursor:pointer;
    transform: scale(1.05);
}`

const brand = css `
width: 100px;`

export default withRouter(Footer);