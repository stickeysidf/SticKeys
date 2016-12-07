var keyPressed = [];
var keyMapping, favIDE, os;

var setKeyMapping = function (mapping) {
  keyMapping = mapping;
};

var bindActionKeys = function () {
  return "1";
};

$(document).ready(function () {
  $('.action-col').on('click', function (e) {
    e.preventDefault();
    document.addEventListener("keydown", keyListenr);  
  });
  
  var keyListenr = function(event) {
    var keys = listenKeys(event);
    var translated = translateKeys(keys.split('+'));

    // document.removeEventListener("keydown", keyListenr);
  };

  var translateKeys = function (keysArray) {
    if (!favIDE) {
      favIDE = localStorage.getItem("favIDE")
    }

    if (!favIDE || !os) {
      return;
    }

    keysArray.forEach((key) => {
      var mapped = keyMapping[key];
      if (mapped) {
        console.log(mapped[favIDE]);
      }
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
});