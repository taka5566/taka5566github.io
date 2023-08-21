class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = selectedColor;
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    // calculate the square root .sqrt() of the X and Y .pow(2) squares
    let radius = Math.sqrt(
      Math.pow(coord[0] - this.origX, 2) + Math.pow(coord[1] - this.origY, 2)
    );

    //clear first
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    //begin draw
    this.contextDraft.beginPath();
    this.contextDraft.arc(this.origX, this.origY, radius, 0, 2 * Math.PI);
    this.contextDraft.stroke();
  }

  onMouseUp(coord) {
    //clear draft
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    //set radius again
    let radius = Math.sqrt(
      Math.pow(coord[0] - this.origX, 2) + Math.pow(coord[1] - this.origY, 2)
    );

    //start draw on real canvas
    this.contextReal.beginPath();
    this.contextReal.arc(this.origX, this.origY, radius, 0, 2 * Math.PI);
    this.contextReal.fill();

    // STORE THE DRAWING MOVE
    beforeDraw();
  }
}
