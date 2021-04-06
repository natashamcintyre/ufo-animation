export default function drawGround(context) {
  context.beginPath()
  context.moveTo(0, 330)
  context.lineTo(200, 340)
  context.lineTo(300, 355)
  context.lineTo(500, 325)
  context.lineTo(600, 331)
  context.lineTo(800, 340)
  context.lineTo(800, 450)
  context.lineTo(0, 450)
  context.strokeStyle = 'darkgreen'
  context.stroke()
  context.fillStyle = 'darkgreen'
  context.fill()
}
