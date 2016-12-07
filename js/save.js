window.onload = function() {

  document.getElementById('save').addEventListener('click', function (e) {
        var androidstudio = new AndroidStudio('macos', ides[0].location);
        var vscode = new VSCode('macos', ides[1].location);

        vscode.saveKeyBinding();
  });

};
