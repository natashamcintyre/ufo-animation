export default function drawUfo(props) {
  const { context, ufoXCenter, ufoYCenter, canvasWidth, canvasHeight } = props
  const ufoLength = canvasWidth / 8
  const ufoWidth = canvasHeight / 15

  const drawUfoTop = () => {
    context.beginPath()
    context.arc(ufoXCenter, ufoYCenter, ufoLength / 2, 39 / 20 * Math.PI, 19 / 20 * Math.PI, true)
    context.fillStyle = 'darkgrey'
    context.fill()
    context.strokeStyle = 'gray'
    context.stroke()
  }

  const drawUfoBody = () => {
    var ufoColour = context.createLinearGradient(0, 0, 150, 150)
    ufoColour.addColorStop(0, 'grey')
    ufoColour.addColorStop(1, 'silver')

    context.beginPath();
    context.ellipse(ufoXCenter, ufoYCenter, ufoWidth, ufoLength, Math.PI * 9 / 20, 0, 2 * Math.PI)
    context.fillStyle = ufoColour
    context.fill()
    context.strokeStyle = 'gray'
    context.stroke()

    context.beginPath()
    context.ellipse(ufoXCenter, ufoYCenter, ufoWidth / 5, ufoLength / 5, Math.PI * 9 / 20, 0, 2 * Math.PI)
    context.fillStyle = '#505050'
    context.fill()
  }

  const drawAllUfoLights = () => {
    drawOneUfoLight(-80, 14)
    drawOneUfoLight(80, -14)
    drawOneUfoLight(-27, 21)
    drawOneUfoLight(35, 12)
    drawOneUfoLight(27, -21)
    drawOneUfoLight(-35, -10)
  }

  const drawOneUfoLight = (XShift, YShift) => {
    context.beginPath()
    context.ellipse(ufoXCenter + XShift, ufoYCenter + YShift, ufoWidth / 6, ufoLength / 10, Math.PI * 9 / 20, 0, 2 * Math.PI)
    context.fillStyle = 'yellow'
    context.fill()
    addLightBeams(XShift, YShift)

  }

  const addLightBeams = (XShift, YShift) => {
    var lightBeamGradient = context.createLinearGradient(0, ufoYCenter + YShift, 0, ufoYCenter + YShift + 80)
    lightBeamGradient.addColorStop(0, '#FFFF66')
    lightBeamGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    context.beginPath()
    context.moveTo(ufoXCenter + XShift - ufoWidth / 12, ufoYCenter + YShift)
    context.lineTo(ufoXCenter + XShift - ufoWidth / 6 - 7, ufoYCenter + YShift + 110)
    context.lineTo(ufoXCenter + XShift + ufoWidth / 6 + 7, ufoYCenter + YShift + 110)
    context.lineTo(ufoXCenter + XShift + ufoWidth / 12, ufoYCenter + YShift)
    context.closePath()
    context.fillStyle = lightBeamGradient
    context.fill()
  }

  drawUfoTop()
  drawUfoBody()
  drawAllUfoLights()
}
