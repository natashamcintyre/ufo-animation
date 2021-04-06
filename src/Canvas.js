import React, { useState } from 'react'
import { useCanvas } from './hooks/useCanvas'

function Canvas() {
  const [play, setPlay] = useState(false)
  const [ canvasRef, canvasWidth, canvasHeight ] = useCanvas(play)

  const togglePauseAnimation = () => {
    setPlay(!play)
  }

  return(
    <div className="App">
      <canvas
        ref = {canvasRef}
        style = {{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }}
      />
      <button id='pause-button' onClick={togglePauseAnimation}>{play === true ? `Pause` : `Play`}</button>
    </div>
  )
}

export default Canvas
