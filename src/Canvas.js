import { useCanvas } from './hooks/useCanvas'

function Canvas() {

  const [ canvasRef, canvasWidth, canvasHeight ] = useCanvas()

  return(
    <div className="App">
      <canvas
        ref = {canvasRef}
        style = {{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }}
      />
    </div>
  )
}

export default Canvas
