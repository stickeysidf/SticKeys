window.onload = function() {

  document.getElementById('Visual Studio Code').addEventListener('click', function (e) {
        favoriteIDE = 'Visual Studio Code';
        console.log('Visual Studio Code');
        document.getElementById("idebox").remove();
  });

  document.getElementById('Android Studio').addEventListener('click', function (e) {
          favoriteIDE = 'Android Studio';
          console.log('Android Studio');
          document.getElementById("idebox").remove();
  });

};
