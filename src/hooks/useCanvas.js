import { useRef, useState, useEffect } from 'react'
import scale from '../scale'
import drawGround from '../drawGround'

const canvasWidth = 800
const canvasHeight = 450

export function useCanvas() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    scale(canvas, context)

    context.clearRect(0, 0, canvasWidth, canvasHeight)
    drawGround(context)
  })

  return [ canvasRef, canvasWidth, canvasHeight ]
}
