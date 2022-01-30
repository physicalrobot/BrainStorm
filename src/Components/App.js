import '../App.css';
import React, { useState, useEffect } from 'react';
import lofiimage from '../lofi_generator w headphones.png'
import CodeNotes from './CodeNotes';
import TextEditor from './TextEditor';
import ThreeEditors from './ThreeEditors';
import About from './About';
import Home from './Home';
import ContactPage from './ContactPage';


import { Routes, Route, Link } from "react-router-dom";


function App() {


  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);






  return (
    <div className="App">





      <br></br>


      <div className='Lofipic'>
        <div id='lofimg'
          className="lofipicture"
          style={{ transform: `translateY(-${offsetY * .8}px)` }}
        />
      </div>


      <div>
        <ThreeEditors />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="contact" element={<ContactPage />} />

      </Routes>

      <div className='contentbody'
        style={{ transform: `translateY(-${offsetY * 2.4}px)` }}
      >



        <CodeNotes />


      </div >













      <div className='textbox'
        style={{ transform: `translateY(-${offsetY * 2.4}px)` }}
      >
        <TextEditor />
      </div>

      <br></br>


    </div>
  );
}

export default App;
