import styled from "styled-components";

export const Description = styled.div`
    margin:0;
    line-height:35px;
`
export const Deepak = styled.span`
    font-size:50px;
`

export const Main = styled.div`
    display: flex;
    text-align: left;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;

    background-color:#F5F5F5;
    padding-left:5%;
    background-image:url("./images/profile.png");
    background-repeat:no-repeat;
    background-size:contain;
    background-position:right 0;
    @media only screen and (max-width:700px) {
        background-position:left 0 bottom 50px;
        color:white;
    }
`


export const Info = styled.span`
    ${'' /* // color:white; */}
    display:none;
`


export const Tag = styled.a`
    margin:5px 10px;
    color:#372948;
`

export const Image = styled.img`
    width:100px;
`