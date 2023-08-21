const penRange = document.getElementById("pen-range");

let penWidth;
penRange.addEventListener("input", function (event) {
  penWidth = event.target.value;
});
