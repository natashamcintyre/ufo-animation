import React, { useState } from 'react'
import { useCanvas } from './hooks/useCanvas'

function Canvas() {
  const [play, setPlay] = useState(false)
  const [ canvasRef, canvasWidth, canvasHeight, resetAnimation ] = useCanvas(play)

  const togglePauseAnimation = () => {
    setPlay(!play)
  }

  function restartAnimation() {
    resetAnimation()
    setPlay(false)
  }

  return(
    <div className="App">
      <div className='canvas'>
        <canvas
          ref = {canvasRef}
          style = {{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }}
        />
      </div>
      <div id="buttons">
        <button id='pause-button' onClick={togglePauseAnimation}>{play === true ? `Pause` : `Play`}</button>
        <button id='restart-button' onClick={restartAnimation}>Replay</button>
      </div>
    </div>
  )
}

export default Canvas
