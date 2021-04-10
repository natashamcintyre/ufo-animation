import React, { useState, useEffect } from 'react'
import { useCanvas } from './hooks/useCanvas'

function Canvas() {
  const [reset, setReset] = useState(0)
  const [play, setPlay] = useState(false)
  const [ canvasRef, canvasWidth, canvasHeight, resetAnimation ] = useCanvas(play)

  const togglePauseAnimation = () => {
    setPlay(!play)
  }

  function resetUfo() {
    // setPlay(false)
    resetAnimation()
  }

  const updateButtonVisibility = () => {
    if (play === true) {
      return 'hidden'
    } else {
      return 'visible'
    }
  }

  return(
    <div className="canvas-and-buttons">
      <div id="buttons">
        <button id='pause-button' onClick={togglePauseAnimation}>{play === true ? `Pause` : `Play`}</button>
        <button id='restart-button' onClick={resetUfo} style={{ visibility: updateButtonVisibility() }}>Reset</button>
      </div>
      <div className='canvas'>
        <canvas
          ref = {canvasRef}
          style = {{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }}
        />
      </div>
    </div>
  )
}

export default Canvas
