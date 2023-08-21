const colorFields = document.querySelectorAll(".color-field");
const colorPicker = document.querySelector(".color-picker");

//global
let selectedColor;

colorFields.forEach(function (field) {
  field.addEventListener("click", function (event) {
    selectedColor = event.target.style.backgroundColor;
  });
});

colorPicker.addEventListener("input", function (event) {
  selectedColor = event.target.value;
});
