import styled from "styled-components";

export const Images = styled.img`

    width:${(props) => props.s};
`

export const Box = styled.div`
    min-height:100vh;
    background-color:#372948;
    padding:20px 60px;
    background-image:url("./images/original.gif");
`

export const Header = styled.div`
    text-align:center;
    margin-bottom:30px;
`

export const Heading = styled.span`
    margin-bottom:20px;
    color:white;
    font-size:35px;

`