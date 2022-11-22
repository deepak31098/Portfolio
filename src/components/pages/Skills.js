import React from "react";
import {Images,Box,Header, Heading,ImageContainer,Title,ImageBox} from '../Styles/SkiilsStyle';
// import "react-responsive-carousesl/lib/styles/carousel.min.css";
// import {Carousel} from "react-responsive-carousel";
// import '../Styles/Skills.css'
import mySkills from "./SkiilsList";

function Skills(){
    return(
        <Box id="Skills" >
             <Header >
                <Heading>My Skills</Heading>    
            </Header>
            <ImageContainer>
                {mySkills.map((elem) => {
                    return (
                    <ImageBox >
                    <Images  src={elem.source}s="160px"></Images>
                    <Title>{elem.name}</Title>
                    </ImageBox>
                    )
                })}                
            </ImageContainer>
        </Box>
    )
}

export default Skills;