const penRange = document.getElementById("pen-range");

//variable to be used globally.
//since its an input we need the value, and the value change based on the range dictated by min and max (number)
let penWidth;
penRange.addEventListener("input", function (event) {
  penWidth = event.target.value;
});
