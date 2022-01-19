import '../App.css';
import React, { useState, useEffect } from 'react';
import lofiimage from '../lofi_generator w headphones.png'
import Music from './Music'
import CodeNotes from './CodeNotes';
import TextEditor from './TextEditor';

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
        // style={{ transform: `translateY(-${offsetY * 3}px)` }}
        />

      </div>

      <div className='contentbody'
        style={{ transform: `translateY(-${offsetY * 1.55}px)` }}
      >
        <CodeNotes />

        <Music />
      </div >
      <div className='textbox'
        style={{ transform: `translateY(-${offsetY * 1.9}px)` }}
      >
        <TextEditor />

      </div>



      <br></br>


    </div>
  );
}

export default App;
