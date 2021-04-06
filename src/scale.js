const scale = (canvas, context) => {
  // Set display size (css pixels)
  var canvasWidth = 800;
  var canvasHeight = 450;
  canvas.style.width = canvasWidth + "px";
  canvas.style.height = canvasHeight + "px";

  // Set actual size in memory, scaled to account for extra pixel density
  var windowScale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas
  canvas.width = Math.floor(canvasWidth * windowScale);
  canvas.height = Math.floor(canvasHeight * windowScale);

  // Normalize coordinate system to use css pixels
  context.scale(windowScale, windowScale);
}

export default scale
