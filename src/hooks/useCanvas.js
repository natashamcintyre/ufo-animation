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

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    scale(canvas, context)

    const ufoLength = canvasWidth / 8
    const ufoWidth = canvasHeight / 15

    context.clearRect(0, 0, canvasWidth, canvasHeight)
    drawGround(context)
    drawUfo({ context, ufoXCenter, ufoYCenter, canvasWidth, canvasHeight })
  })

  return [ canvasRef, canvasWidth, canvasHeight ]
}
