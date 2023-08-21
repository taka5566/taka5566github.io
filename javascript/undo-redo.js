let canvasEl = document.getElementById("canvas-real");
//array to store data
let undoDataStore = [];
let redoDataStore = [];

//captures canvas img data and store it
function beforeDraw() {
  undoDataStore.push(canvasEl.toDataURL());
  //clears old redo
  redoDataStore = [];
}

function undoDrawing() {
  //check if there is items in undo array
  if (undoDataStore.length > 0) {
    //if yes last canvas img to redo array
    redoDataStore.push(canvasEl.toDataURL());
    //remove last state from undo
    undoDataStore.pop();
    if (undoDataStore.length === 0) {
      //if no more undo, clear canvas
      clearCanvas();
    } else {
      //otherwise put back previus canvas img
      restoreCanvas(undoDataStore[undoDataStore.length - 1]);
    }
  }
}

function redoDrawing() {
  //check if item in redo array
  if (redoDataStore.length > 0) {
    //move the last redo to the undo array
    undoDataStore.push(redoDataStore.pop());
    //restore canvas by passing the last undo
    restoreCanvas(undoDataStore[undoDataStore.length - 1]);
  }
}

//restore the canvas by creating new img based on the last url passed in redo
function restoreCanvas(dataUrl) {
  //get canvas context use methods to draw in canvas
  const contextReal = canvasEl.getContext("2d");
  //create an img
  const image = new Image();
  //make the source the dataurl
  image.src = dataUrl;
  //when img is ready
  image.onload = function () {
    //first clear canvas
    contextReal.clearRect(0, 0, canvasEl.width, canvasEl.height);
    //then apply the img to canvas
    contextReal.drawImage(image, 0, 0);
  };
}
