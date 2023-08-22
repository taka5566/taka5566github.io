class QuadraticCurve extends PaintFunction {
  constructor(contextDraft, contextReal) {
    super();
    this.contextDraft = contextDraft;
    this.contextReal = contextReal;
    this.count = 0;
  }

  onMouseDown(coord, event) {
    this.contextDraft.strokeStyle = selectedColor;
    // Kind of line
    this.contextDraft.lineJoin = "round";
    // Width of line
    this.contextDraft.lineWidth = penWidth;
    // Drawing the line here
    if (this.count === 0) {
      this.origX = coord[0];
      this.origY = coord[1];
    }
  }

  onDragging(coord, event) {
    if (this.count === 0) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.secondX = coord[0];
      this.secondY = coord[1];
      this.contextDraft.lineTo(this.secondX, this.secondY);
      this.contextDraft.stroke();
    } else if (this.count === 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(
        coord[0],
        coord[1],
        this.secondX,
        this.secondY
      );
      this.contextDraft.stroke();
      //testing
      // this.context.beginPath();
      // this.context.moveTo(0, 0);
      // this.context.lineTo(this.secondX,this.secondY);
      // this.context.stroke();
    }
  }

  onMouseMove() {}

  onMouseUp(coord, event) {
    this.contextReal.strokeStyle = selectedColor;
    // Kind of line
    this.contextReal.lineJoin = "round";
    // Width of line
    this.contextReal.lineWidth = penWidth;

    if (this.count === 0) {
      this.count++;
      console.log(this.count);
    } else if (this.count === 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.quadraticCurveTo(
        coord[0],
        coord[1],
        this.secondX,
        this.secondY
      );
      this.contextReal.stroke();
      // push();
      this.count = 0;
    }
    // STORE THE DRAWING MOVE
    beforeDraw();
  }
  // onMouseUp(){}
  onMouseLeave() {}
  onMouseEnter() {}

  clearCanvas = () => {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  };
}
