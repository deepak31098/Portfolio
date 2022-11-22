import React, { useEffect, useRef, useState } from "react";
import {Link,useLocation} from 'react-router-dom';
import './Styles/NavbarStyle.css';


function Navbar(){
  const [topBar, showTopBar]=useState(false);
  const [hideHome,setShowHome]=useState(true);
  
  // const location = useLocation();
  // useEffect(() =>{
  //   showTopBar(false);
  // },[location]);
  function setStyle(){
    setShowHome(false);
  }
    const topBarDisplay = {display: topBar && "flex"}
    return (
        <div className="navbar">
          <div style={topBarDisplay}className="links">
          <a onClick={() => setShowHome(true)} style={{display:hideHome ? "none" :"inline"}} href="#Home">Home</a>
          <a  onClick={setStyle} href="#Skills">Skills</a>
          <a  onClick={setStyle} href="#project">Projects</a>
          <a  onClick={setStyle} href="#Academic">Academic</a>
          <a  onClick={setStyle} href="#Contact" >Contact</a>
          
            {/* <Link  to="/">Home</Link> */}
            {/* <Link  to="/projects">Projects</Link> */}
            {/* <Link  to="/academic">Academic</Link> */}
          </div>  
          <div className="toggleButton">
          <img onClick={() => showTopBar(prev => !prev)} src="./images/button.png"></img>
          </div>
        </div>
    )
}


export default Navbar;
