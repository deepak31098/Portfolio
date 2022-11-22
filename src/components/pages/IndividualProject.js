import React from "react";
import '../Styles/IndividualProjectStyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function IndividualProject(prop){
const myStyle={backgroundImage:`url(${prop.image})`
}

    return (
        <div>
            <a href={prop.link} target="_blank"><div className="projectImg">
            <img className="image" src={prop.image}></img>
            </div>
            </a>
            <div className="title" >
            <span > {prop.name}</span>
            <a href={prop.github} target="_blank"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
            </div>
        </div>

    )


}

export default IndividualProject;