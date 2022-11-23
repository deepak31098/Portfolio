import styled from "styled-components";

export const Container= styled.div`

    display: grid;
    padding: 35px;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    grid-gap: 30px;
    justify-items: normal;
    @media only screen and (max-width:850px) {
        grid-template-columns: repeat(1,1fr);
    }
    ${'' /* @media only screen and (max-width:600px) {
        grid-template-columns: repeat(1,1fr);
    } */}
` 

export const Header= styled.div`
    margin-bottom:20px;
    background-color:transparent;
    font-weight:bold;
    padding-top:30px;
    text-align:center
`

export const Main= styled.div`
    ${'' /* background-image:url("./images/dark.png"); */}
    background-color:#F5F5F5;
`

export const Heading= styled.span`
    font-size:30px;
    margin:0
`