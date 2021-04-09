export default function drawTrees(props) {
  const { context } = props

  const drawTree = (treeTopX, treeTopY) => {
    context.beginPath()
    context.moveTo(treeTopX, treeTopY)
    context.lineTo(treeTopX - 20, treeTopY + 40)
    context.lineTo(treeTopX - 10, treeTopY + 40)
    context.lineTo(treeTopX - 27, treeTopY + 65)
    context.lineTo(treeTopX - 15, treeTopY + 65)
    context.lineTo(treeTopX - 35, treeTopY + 90)
    context.lineTo(treeTopX + 35, treeTopY + 90)
    context.lineTo(treeTopX + 15, treeTopY + 65)
    context.lineTo(treeTopX + 27, treeTopY + 65)
    context.lineTo(treeTopX + 10, treeTopY + 40)
    context.lineTo(treeTopX + 20, treeTopY + 40)
    context.closePath()
    context.fillStyle = 'darkgreen'
    context.fill()
  }

  drawTree(100, 250)
}
