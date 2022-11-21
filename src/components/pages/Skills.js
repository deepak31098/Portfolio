import React from "react";
import {Images,Box,Header, Heading} from '../Styles/SkiilsStyle';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import '../Styles/Skills.css'

function Skills(){
    return(
        <Box>
             <Header>
                <Heading>My Skills</Heading>    
            </Header>
            <div>
            <Carousel  infiniteLoop autoPlay emulateTouch stopOnHover showThumbs={false}	>
                <div>
                <Images  src="./images/css.png" s="100px"></Images>
                </div>
                <div>
                <Images src="./images/html.png" s="100px"></Images>
                </div>
                <div>
                <Images src="./images/react1.png" s="100px"></Images>
                </div>
                <div>
                <Images src="./images/js.png" s="100px"></Images>
                </div>
                <div>
                <Images src="./images/java.png" s="100px"></Images>
                </div>
                <div>
                <Images src="./images/Bootstrap.png" s="100px"></Images>
                </div>
                <div>
                <Images src="./images/ds.png" s="100px"></Images>
                </div>
                <div>
                <Images src="./images/sc.png" s="100px"></Images>
                </div>
            </Carousel>
            </div>
        </Box>
    )
}

export default Skills;