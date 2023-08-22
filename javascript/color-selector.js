const colorFields = document.querySelectorAll(".color-field");
const colorPicker = document.querySelector(".color-picker");

//variable global to be used in any script
let selectedColor;

//for each button get the background color when click and store it on the variable
colorFields.forEach(function (field) {
  field.addEventListener("click", function (event) {
    selectedColor = event.target.style.backgroundColor;
  });
});

//since colorpicker is an input, it need the value.
colorPicker.addEventListener("input", function (event) {
  selectedColor = event.target.value;
});
