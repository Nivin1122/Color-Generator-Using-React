import logo from './logo.svg';
import './App.css';
import React, {useState } from 'react'

function App() {
  const [colour, setColour] = useState('#000000')

  const randomclr =()=>{
    const randclr = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColour(randclr);
  };
  return (
    <>
        <div style={{backgroundColor:colour,height: '50vh',height: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <button onClick={randomclr}>click</button>
        </div>
    </>
  );
}

export default App;
