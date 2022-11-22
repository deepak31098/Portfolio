import styled from "styled-components";

export const Images = styled.img`

    width:${(props) => props.s};
`

export const Box = styled.div`
    min-height:100vh;
    background-color:#372948;
    padding:20px 60px;
    background-image:url("./images/dark.png");
`

export const Header = styled.div`
    text-align:center;
    margin:30px;
    font-weight:bold;
`

export const Heading = styled.span`
    color:white;
    font-size:30px;

`

export const ImageContainer = styled.div`
    display: grid;
    padding: 1%;
    grid-template-columns: repeat(4,1fr);
    grid-gap:30px;
    justify-items: center;
    align-items: center;
    text-align:center;
    @media only screen and (max-width:1000px) {
        grid-template-columns: repeat(3,1fr);
    }
    @media only screen and (max-width:900px) {
        grid-template-columns: repeat(2,1fr);
        grid-gap:10px;
        padding: 10px;
    }
    @media only screen and (max-width:600px) {
        grid-template-columns: repeat(1,1fr);

    }
`

export const Title = styled.span`
   color:white;
   font-size:18px;
`

export const ImageBox = styled.div`
    display:flex;
    text-align: center;
    flex-direction: column;
`