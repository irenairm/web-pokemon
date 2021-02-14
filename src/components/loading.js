/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import loading from '../assets/loading.gif'

export default function Loading() {
    return <div css={load}>
        <img css={img} src={loading} />
        <p css={text}>Loading...</p></div>
}

const load = css`
display:block;
margin: 0 auto;
text-align:center;
`
const img = css `
height: 20rem;
width: auto;`

const text = css `
font-family: Monaco;
font-weight: 700;
text-align:center;
`