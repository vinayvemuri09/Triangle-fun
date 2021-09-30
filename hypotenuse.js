var btnHypo = document.querySelector("#btn-hypo");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var outputHypo = document.querySelector("#output-hypo");
btnHypo.addEventListener("click", clickHypoHandler);
function clickHypoHandler() {
  if (Number(a.value) < 0 || Number(b.value) < 0) {
    outputHypo.innerText = "Please enter non-negative values";
  } else if (a.value === "" || b.value === "") {
    outputHypo.innerText = "Please enter valid values";
  } else if (Number(a.value) === 0 || Number(b.value) === 0) {
    outputHypo.innerText = "The length should be greater than 0!";
  } else {
    var lengthHypo = Math.sqrt(
      Number(a.value) * Number(a.value) + Number(b.value) * Number(b.value)
    );
    outputHypo.innerText =
      "The length of the hypotenuse is " + lengthHypo + " cm";
  }
}