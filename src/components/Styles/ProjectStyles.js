import styled from "styled-components";

export const Container= styled.div`

    display: grid;
    padding: 35px;
    grid-template-columns: repeat(3,1fr);
    align-items: center;
    grid-gap: 30px;
    justify-items: normal;
    @media only screen and (max-width:900px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media only screen and (max-width:600px) {
        grid-template-columns: repeat(1,1fr);
    }
` 

export const Header= styled.div`
    margin:0;
    background-color:transparent;
    color:white;
    padding:15px;
    text-align:center
`

export const Main= styled.div`
    background-image:url("./images/original.gif");
`

export const Heading= styled.span`
    font-size:28px;
    margin:0
`