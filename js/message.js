window.onload = function() {

  if (localStorage.getItem("favIDE")) {
    document.getElementById("idebox").remove();
  }

  document.getElementById('Visual Studio Code').addEventListener('click', function (e) {
        localStorage.setItem("favIDE", "vscode");
        document.getElementById("idebox").remove();
  });

  document.getElementById('Android Studio').addEventListener('click', function (e) {
          localStorage.setItem("favIDE", "androidstudio");
          document.getElementById("idebox").remove();
  });

};
