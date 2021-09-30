var btnArea = document.querySelector("#btn-area");
var base = document.querySelector("#base");
var height = document.querySelector("#height");
var outputArea = document.querySelector("#output-area");
btnArea.addEventListener("click", clickAreaHandler);
function clickAreaHandler() {
  if (Number(base.value) < 0 || Number(height.value) < 0) {
    outputArea.innerText = "Please enter non-negative values";
  } else if (base.value === "" || height.value === "") {
    outputArea.innerText = "Please enter valid values";
  } else if (Number(base.value) === 0 || Number(height.value) === 0) {
    outputArea.innerText = "The length should be greater than 0!";
  } else {
    var area = 0.5 * Number(base.value) * Number(height.value);
    outputArea.innerText = "The area of the triangle is " + area + " cm²";
  }
}