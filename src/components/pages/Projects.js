import React from "react";
import IndividualProject from "./IndividualProject";
import {Container} from '../Styles/ProjectStyles.js';
import { Header,Heading,Main } from "../Styles/ProjectStyles.js";
import projects from"./Project.js";

function Projects(){
    return(
        <Main>
        <Header><Heading id="project" >My Projects</Heading></Header>
        <Container>
        {projects.map((elem) => <IndividualProject description={elem.description} name={elem.title} image={elem.name} github={elem.github} link={elem.link} />
        )}
 

        </Container>
        </Main>
    )
}

export default Projects;