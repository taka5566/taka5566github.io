class WriteText extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.origX = null;
        this.origY = null;
    }

    onMouseDown(coord, event) {
        if (fontBoxCounter == false) {
            this.origX = coord[0];
            this.origY = coord[1];
            this.contextReal.font = "italic bold";
            this.contextReal.fillStyle = "red";
            var input = document.createElement('input');
            input.type = 'text';
            input.style.position = 'fixed';
            input.style.border = "2px red solid";
            input.style.placeholder = 'Type please!';
            input.style.height = 40;
            input.style.width = 350;
            input.style.font = "italic bold";
            input.placeholder = "To add text, click here, type, and push 'Enter'";
            input.style.left = (this.origX - 5) + 'px';
            input.style.top = (this.origY - 5) + 'px';
            input.id = 'textBox';
            document.body.appendChild(input);

            input.onkeydown = (event) => {
                if (event.key == 'Enter') {
                    const typedText = document.getElementById("textBox").value;
                    this.contextReal.fillText(typedText, event.clientX + 30, event.clientY - 20);
                    document.body.removeChild(input);
                }
            };
        }
    }

    onDragging() {}
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave(coord) {
        if (coord[0] < this.origX + 300 && coord[0] > this.origX - 300 && coord[1] < this.origY + 40 && coord[1] > this.origY - 40) {
        } else {
            document.getElementById('textBox').remove();
        }
    }
    onMouseEnter() {}
}