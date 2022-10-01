setInterval(showCursor, 500);

var show_cursor = "inline";

function showCursor() {
  element = document.getElementById("cursor");
  element.style.display = show_cursor;
  show_cursor = show_cursor == "none" ? "inline" : "none";
}
