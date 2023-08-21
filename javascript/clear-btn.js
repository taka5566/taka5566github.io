function clearCanvas() {
  //determine color of canvas
  contextReal.fillStyle = "#fff";

  //clear
  contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  //fill with color
  contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
}
