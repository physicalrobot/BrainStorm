import '../App.css';
import React, { useState, useEffect } from 'react';
import lofiimage from '../lofi_generator w headphones.png'
import Music from './Music'
import CodeNotes from './CodeNotes';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="App">
      <div className='Parallax'>
        <div
          className="Parallax__background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />

      </div>
      <div className='contentbody'>
        <h1>BrainStorm</h1>

        <CodeNotes />

        <Music />
        {/* <img src={lofiimage} alt='vibes'></img> */}
      </div >
    </div>
  );
}

export default App;
