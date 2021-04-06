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
  }, [ufoXCenter, ufoYCenter])

  function animate () {
    moveHorizontally()
    moveVertically()
    updateTimer()
  }

  function moveHorizontally() {
    if (timer >= 600 && timer < 1200 || timer >= 1800 && timer < 2400) {
      setUfoXCenter(ufoXCenter - 1)
    } else {
      setUfoXCenter(ufoXCenter + 1)
    }
  }

  function moveVertically() {
    if (timer < 600) {
      setUfoYCenter(Math.pow(ufoXCenter - 500, 2) / - 1800 + 100)
    } else if (timer < 1200) {
      setUfoYCenter(Math.pow(ufoXCenter - 300, 2) / - 1500 + 184)
    } else if (timer < 1800) {
      setUfoYCenter(Math.pow(ufoXCenter - 600, 2) / - 2000 + 282)
    }
  }

  function updateTimer() {
    if (timer === 2400) {
      setTimer(0)
    } else {
      setTimer(timer + 1)
    }
  }

  setTimeout(animate, 5)

  return [ canvasRef, canvasWidth, canvasHeight ]
}
