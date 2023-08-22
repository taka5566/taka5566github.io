class WriteText extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.origX = null;
    this.origY = null;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];

    this.contextReal.fillStyle = selectedColor;

    // Create a textbox element and style it
    const textBox = document.createElement("input");
    textBox.type = "text";
    textBox.style.position = "fixed";
    textBox.style.border = `2px ${selectedColor} solid`;
    textBox.style.height = `${penWidth}px`;
    textBox.style.width = `${penWidth}px`;
    textBox.style.font = "italic bold";
    textBox.style.fontSize = `${penWidth}px`;
    textBox.placeholder = "To add text, click here, type, and push 'Enter'";
    textBox.style.left = this.origX - 5 + "px";
    textBox.style.top = this.origY - 5 + "px";
    textBox.id = "textBox";

    // Append the textbox  to the body
    document.body.appendChild(textBox);

    // Handle the enter press event to add the text to the canvas
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        const typedText = textBox.value;

        // Write the text on the canvas
        this.contextReal.font = `${penWidth}px serif`;
        this.contextReal.fontSize = `${penWidth}px`;
        this.contextReal.fillStyle = selectedColor;
        this.contextReal.fillText(typedText, coord[0], coord[1]);

        // remove the event listener
        document.removeEventListener("keydown", handleKeyPress);

        // removee the textbox from the document body
        document.body.removeChild(textBox);
      }
    };

    // add the event listener for the 'Enter' key press
    document.addEventListener("keydown", handleKeyPress);
  }

  onMouseLeave(coord) {
    const textBox = document.getElementById("textBox");

    // Check if cursor is ok
    if (
      coord[0] < this.origX + 350 &&
      coord[0] > this.origX - 5 &&
      coord[1] < this.origY + 40 &&
      coord[1] > this.origY - 5
    ) {
      return;
    }

    // remove the textbox from the document body
    if (textBox) {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.removeChild(textBox);
    }
  }
}

/* class WriteText extends PaintFunction {
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
      this.contextReal.fillStyle = selectedColor;

      var input = document.createElement("input");
      input.type = "text";
      input.style.position = "fixed";
      input.style.border = "2px red solid";
      input.style.placeholder = "Type please!";
      input.style.height = 40;
      input.style.width = 350;
      input.style.font = "italic bold";
      input.placeholder = "To add text, click here, type, and push 'Enter'";
      input.style.left = this.origX - 5 + "px";
      input.style.top = this.origY - 5 + "px";
      input.id = "textBox";
      document.body.appendChild(input);

      input.onkeydown = (event) => {
        if (event.key == "Enter") {
          const typedText = document.getElementById("textBox").value;
          this.contextReal.fillText(
            typedText,
            event.clientX + 30,
            event.clientY - 20
          );
          document.body.removeChild(input);
        }
      };
    }
  }

  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave(coord) {
    if (
      coord[0] < this.origX + 300 &&
      coord[0] > this.origX - 300 &&
      coord[1] < this.origY + 40 &&
      coord[1] > this.origY - 40
    ) {
    } else {
      document.getElementById("textBox").remove();
    }
  }
  onMouseEnter() {}
}
 */
