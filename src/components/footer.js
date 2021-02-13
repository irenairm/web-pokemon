/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import {withRouter} from 'react-router-dom'
import ball from '../assets/ball.png'
function catchPokemon(){
    alert('tes')
}
function Footer(){
    return <div css={footer}>
        <img css={brand} src={ball}></img><p>Catch</p>
        </div>
}

const footer = css`
display:block;
position: fixed;
left: 0;
bottom: 0;;
width:50%;
text-align:center;
margin: 0 auto;
padding-top:1rem;
background-color: white;
font-weight: 700;
align-items:center;`

const brand = css `
width: 100px;`
export default withRouter(Footer);