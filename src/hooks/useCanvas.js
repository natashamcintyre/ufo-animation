import { useRef, useState, useEffect } from 'react'
import scale from '../scale'
import drawGround from '../drawGround'
import drawUfo from '../drawUfo'

const canvasWidth = 800
const canvasHeight = 450

export function useCanvas() {
  const canvasRef = useRef(null)
  const [ufoXCenter, setUfoXCenter] = useState(100)
  const [ufoYCenter, setUfoYCenter] = useState(100)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    scale(canvas, context)

    context.clearRect(0, 0, canvasWidth, canvasHeight)
    drawGround(context)
    drawUfo({ context, ufoXCenter, ufoYCenter, canvasWidth, canvasHeight })
  }, [ufoXCenter])

  function animate () {
    moveHorizontally()
    updateTimer()
  }

  function moveHorizontally() {
    if (timer >= 600 && timer < 1200) {
      setUfoXCenter(ufoXCenter - 1)
    } else {
      setUfoXCenter(ufoXCenter + 1)
    }
  }

  function updateTimer() {
    if (timer === 1200) {
      setTimer(0)
    } else {
      setTimer(timer + 1)
    }
  }

  setTimeout(animate, 5)

  return [ canvasRef, canvasWidth, canvasHeight ]
}
