import '../App.css';
import React from 'react';
import lofiimage from '../lofi_generator w headphones.png'
import Music from './Music'
import CodeNotes from './CodeNotes';

function App() {
  return (
    <div className="App">
      <h1>BrainStorm</h1>

      <CodeNotes />

      <Music />
      <img src={lofiimage} alt='vibes'></img>
    </div >
  );
}

export default App;
