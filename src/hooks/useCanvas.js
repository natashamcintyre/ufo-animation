import { useRef, useState, useEffect } from 'react'
import scale from '../scale'
import drawGround from '../drawGround'
import drawClouds from '../drawClouds'
import drawUfo from '../drawUfo'
import drawTrees from  '../drawTrees'

const canvasWidth = 800
const canvasHeight = 450

export function useCanvas(play) {
  const canvasRef = useRef(null)
  const [ufoXCenter, setUfoXCenter] = useState(100)
  const [ufoYCenter, setUfoYCenter] = useState(100)
  const [timer, setTimer] = useState(0)
  const [cloudOrigin, setCloudOrigin] = useState(3)
  const [treeScale, setTreeScale] = useState(30)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    scale(canvas, context)

    context.clearRect(0, 0, canvasWidth, canvasHeight)
    drawGround(context)
    drawClouds({ context, cloudOrigin })
    drawTrees({ context, treeScale })
    drawUfo({ context, ufoXCenter, ufoYCenter, canvasWidth, canvasHeight })
  }, [ufoXCenter, ufoYCenter, cloudOrigin, treeScale])

  function animate () {
    animateTrees()
    animateClouds()
    moveHorizontally()
    moveVertically()
    updateTimer()
  }

  function animateClouds() {
    setCloudOrigin((cloudOrigin + 1199) % 1200)
  }

  function animateTrees() {
    if (timer < 2000) {
      setTreeScale((treeScale + 99.5) % 100)
    }
  }

  function moveHorizontally() {
    if (timer >= 600 && timer < 1200 || timer >= 1800 && timer < 2000) {
      setUfoXCenter(ufoXCenter - 1)
    } else if (timer < 1800) {
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
    } else if (timer < 2000) {
      setUfoYCenter(- Math.pow(Math.E, ufoXCenter / 160) + 356.5)
    }
  }

  function updateTimer() {
    setTimer(timer + 1)
  }

  function resetAnimation() {
    setUfoXCenter(100)
    setUfoYCenter(100)
    setTimer(0)
  }

  if (play === true) {
    setTimeout(animate, 5)
  }

  return [ canvasRef, canvasWidth, canvasHeight, resetAnimation ]
}
