import React, { useState } from "react";
import '../Styles/IndividualProjectStyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function IndividualProject(prop){
// const myStyle={backgroundImage:`url(${prop.image})`
// }
const [hidden, setHidden]= useState({display:"none"});

    return (
        <div>
            <div onMouseEnter={()=>{
                setHidden({display:"block"})
            }}
            onMouseLeave={()=>{
                setHidden({display:"none"})
            }}
             className="projectImg">

            <a href={prop.link} target="_blank"><img className="image" src={prop.image}></img></a>
            <div style={hidden} className="description"><span>{prop.description}</span></div>
            </div>
            

            <div className="title" >
            <span > {prop.name}</span>
            <a href={prop.github} target="_blank"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
            </div>
        </div>

    )


}

export default IndividualProject;