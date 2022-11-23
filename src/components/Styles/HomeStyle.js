import styled from "styled-components";

export const Description = styled.div`
    line-height:35px;
   
  
`
export const Deepak = styled.span`
    font-size:50px;
    @media only screen and (max-width:600px) {
        font-size:40px;
    }
`

export const Main = styled.div`
    display: flex;
    text-align: left;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;

    background-color:#F5F5F5;
    ${'' /* padding-left:5%; */}
    background-image:url("./images/profile.png");
    
    background-repeat:no-repeat;
    background-size:contain;
    background-position:right 0 center;
    position:relative;
    isolation:isolate;
    ::after{
        content:"";
        position:absolute;
        background-color:white;
        opacity:.1;
        z-index:-1;
        width:100%;
        height:100%;
        @media only screen and (max-width:800px) {
            opacity:.3;
    }
    }
`


export const Info = styled.span`
    ${'' /* // color:white; */}
    display:none;
`


export const Tag = styled.a`
    margin:10px 15px 0 0;
    color:#372948;
`

export const Image = styled.img`
    width:100px;

`

export const Wrap = styled.div`
    margin-left:3%;

`