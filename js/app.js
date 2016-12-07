var keyPressed = [];

// var keys = setInterval(function(){ 
//   keyPressed = key.getPressedKeyCodes();
//   console.log(keyPressed);
// }, 100);

document.addEventListener("keydown", function(event) {
  
  var keys = "";

  if (event.metaKey) {
    keys += 'COMMAND+';
  }
  if (event.ctrlKey) {
    keys += 'CTRL+';
  }
  if (event.shiftKey) {
    keys += 'SHIFT+';
  }
  if (event.altKey) {
    keys += 'ALT+';
  }
  if (event.keyCode > 0) {
    keys += '' + String.fromCharCode(event.keyCode);
  }

console.log(keys);

  if (keys.indexOf('+')) {

  }
});

// while (keyPressed[0] == null) {
  
// }
