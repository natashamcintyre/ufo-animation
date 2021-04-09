export default function drawClouds(props) {
  const { context, cloudOrigin } = props

  const drawCloud = (x, y, scale) => {
    context.beginPath();
    context.arc(x, y, 24 * scale, Math.PI * 0.5, Math.PI * 1.5);
    context.arc(x + 26 * scale, y - 24 * scale, 24 * scale, Math.PI * 1, Math.PI * 1.85);
    context.arc(x + 60 * scale, y - 18 * scale, 20 * scale, Math.PI * 1.29, Math.PI * 1.91);
    context.arc(x + 80 * scale, y, 24 * scale, Math.PI * 1.5, Math.PI * 0.5);
    context.moveTo(x + 80 * scale, y + 24 * scale);
    context.lineTo(x, y + 24 * scale);
    context.strokeStyle = '#797874';
    context.stroke();
    context.fillStyle = '#FEFFF3';
    context.fill()
  }

  drawCloud((cloudOrigin + 1200) % 1200 - 200, 200, 1)
  drawCloud((cloudOrigin + 1500) % 1200 - 200, 100, 1.5)
  drawCloud((cloudOrigin + 1900) % 1200 - 200, 160, 1.25)
}
