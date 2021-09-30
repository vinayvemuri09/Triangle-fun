var btnTriangle = document.querySelector("#btn-triangle");
var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var output = document.querySelector("#output");

function clickHandler() {
  if (
    Number(angle1.value) < 0 ||
    Number(angle2.value) < 0 ||
    Number(angle3.value) < 0
  ) {
    output.innerText = "Please enter non-negative values";
  } else if (
    angle1.value === "" ||
    angle2.value === "" ||
    angle3.value === ""
  ) {
    output.innerText = "Please enter valid values";
  } else {
    if (
      Number(angle1.value) === 0 ||
      Number(angle2.value) === 0 ||
      Number(angle3.value) === 0
    ) {
      output.innerText = "No! The angles do not form a Triangle!";
    } else {
      var sumTriangle =
        Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
      if (sumTriangle === 180) {
        output.innerText = "Yes! The angles forms a Triangle!";
      } else {
        output.innerText = "No! The angles do not form a Triangle!";
      }
    }
  }
}

btnTriangle.addEventListener("click", clickHandler);