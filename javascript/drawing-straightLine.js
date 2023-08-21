class StraightLine extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;    
        this.contextDraft = contextDraft; 
          
    }
    
    onMouseDown(coord, event){
        this.origX = coord[0];
        this.origY = coord[1];
    }
     
    onDragging(coord, event){
        this.contextDraft.strokeStyle = selectedColor;
        // Kind of line
        this.contextDraft.lineJoin = "round";
        // Width of line
        this.contextDraft.lineWidth = penWidth;

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();  
    }
    

    
    onMouseUp(coord, event){
        this.contextReal.strokeStyle = selectedColor;
        // Kind of line
        this.contextReal.lineJoin = "round";
        // Width of line
        this.contextReal.lineWidth = penWidth;
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();

    // STORE THE DRAWING MOVE
        beforeDraw();


    }

    onMouseMove(){}
    onMouseLeave(){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

    }
    onMouseEnter(){}

}

   
