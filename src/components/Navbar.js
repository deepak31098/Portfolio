import React, { useEffect, useState } from "react";
import {Link,useLocation} from 'react-router-dom';
import './Styles/NavbarStyle.css';

function Navbar(){
  const [topBar, showTopBar]=useState(false);

  const location = useLocation();
  useEffect(() =>{
    showTopBar(false);
  },[location]);

    const topBarDisplay = {display: topBar && "flex"}
    return (
        <div className="navbar">
          <div style={topBarDisplay}className="links">
            <Link  to="/">Home</Link>
            <Link  to="/projects">Projects</Link>
            <Link  to="/academic">Academic</Link>
          </div>  
          <div className="toggleButton">
          <img onClick={() => showTopBar(prev => !prev)} src="./images/button.png"></img>
          </div>
        </div>
    )
}


export default Navbar;
