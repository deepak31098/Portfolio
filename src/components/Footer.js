import React from "react";
import './Styles/Footerstyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,faFacebook,faInstagram,faGoogle
} from '@fortawesome/free-brands-svg-icons'


function Footer(){
    return (
        <div className="mainContainer">
            <div className="iconsContainer">
            {/* <a href="https://www.youtube.com" className="icons youtube" > 
            <FontAwesomeIcon  icon={faYoutube} size="2x"/></a>
            <a href="https://www.facebook.com" className="icons facebook"> 
            <FontAwesomeIcon  icon={faFacebook} size="2x"/></a> */}
            <a href="mailto:deepaktiwari6234@gmail.com" className="icons instagram"> 
            <FontAwesomeIcon icon={faGoogle} size="2x"/></a>
            </div>
            <div className="contact">
                <p>&copy; Deepak 2022 </p>
            </div>
        </div>
        )
}

export default Footer;