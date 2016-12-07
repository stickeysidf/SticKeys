var keyPressed = [];
var keyMapping;

var setKeyMapping = function (mapping) {
  keyMapping = mapping;
};
// var keys = setInterval(function(){ 
//   keyPressed = key.getPressedKeyCodes();
//   console.log(keyPressed);
// }, 100);

document.addEventListener("keydown", function(event) {
  var keys = listenKeys(event);
  var translated = translateKeys(keys.split('+'));
});

var translateKeys = function (keysArray) {
  keysArray.forEach((key) => {
    
  });
};

var listenKeys = function (event) {
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

  if (keys.endsWith('+')) {
    keys = keys.substring(0, keys.length - 1);
  }

  return keys;
};