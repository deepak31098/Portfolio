import React from 'react';
import { GlobalStyle } from './Styles/Global';
import Home from './pages/Home.js'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Navbar from './Navbar';
import Footer from './Footer';
import Academic from './pages/Academic';
import Skills from './pages/Skills';

function App() {
  return (
    <div>
    <GlobalStyle/>
      {/* <Router> */}
      <Navbar />
      <Home/>
      <Skills/>
      <Projects/>
      <Academic/>
        {/* <Routes> */}
          {/* <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/academic" element={<Academic/>}/> */}
        {/* </Routes> */}
        <Footer/>
      {/* </Router> */}
    </div>
  
  );
}

export default App;
