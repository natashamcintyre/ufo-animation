import React from 'react'
import Canvas from './Canvas'
import './App.css'

function App() {
  return (
    <div className="ufo-app">
      <div className="intro">
        <h1>UFO Animation</h1>
        <p>{ 'Click on Play to start the animation' }</p>
      </div>
      <Canvas />
    </div>
  )
}

export default App;
