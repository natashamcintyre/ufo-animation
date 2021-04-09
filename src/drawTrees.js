export default function drawTrees(props) {
  const { context, treeScale } = props

  const drawTree = (treeTopX, treeTopY, scale) => {
    if (scale > 0.1) {
      context.beginPath()
      context.moveTo(treeTopX, treeTopY)
      context.lineTo(treeTopX - 25 * scale, treeTopY + 50 * scale)
      context.lineTo(treeTopX - 13 * scale, treeTopY + 50 * scale)
      context.lineTo(treeTopX - 34 * scale, treeTopY + 88 * scale)
      context.lineTo(treeTopX - 19 * scale, treeTopY + 88 * scale)
      context.lineTo(treeTopX - 44 * scale, treeTopY + 130 * scale)
      context.lineTo(treeTopX + 44 * scale, treeTopY + 130 * scale)
      context.lineTo(treeTopX + 19 * scale, treeTopY + 88 * scale)
      context.lineTo(treeTopX + 34 * scale, treeTopY + 88 * scale)
      context.lineTo(treeTopX + 13 * scale, treeTopY + 50 * scale)
      context.lineTo(treeTopX + 25 * scale, treeTopY + 50 * scale)
      context.closePath()
      context.fillStyle = 'darkgreen'
      context.fill()
    }
  }

  // const treeOneScale = treeScale
  // const treeTwoScale = (treeScale + 130) % 100
  // const treeThreeScale = (treeScale + 190) % 100

  // if (treeScale > 13) {
  //   drawTree(200 - treeScale, 320, treeScale / 100)
  // }

  drawTree(170 - treeScale % 100, 330 + treeScale / 100, treeScale * 0.02)
  drawTree(270 - (treeScale + 130) % 100, 340 - ((treeScale + 130) % 100) / 2, (treeScale + 130) % 100 * 0.02)
  drawTree(410 - (treeScale + 180) % 100, 330 - ((treeScale + 180) % 100) / 2, (treeScale + 180) % 100 * 0.02)
}
