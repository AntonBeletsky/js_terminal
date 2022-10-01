/* https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event */

console.log(1);

var output = document.getElementById("outline");
var input = document.getElementById("root");

input.addEventListener("keypress", logKey);

function logKey(e) {
  document.getElementById("cursor").style.display = "none";

  console.log(e.key);

  output.innerHTML = output.innerHTML + e.key;
}
