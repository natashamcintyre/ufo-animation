import { useRef, useState, useEffect } from 'react'

const canvasWidth = 800
const canvasHeight = 450

export function useCanvas() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.clearRect(0, 0, canvasWidth, canvasHeight)
  })

  return [ canvasRef, canvasWidth, canvasHeight ]
}
