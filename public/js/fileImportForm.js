var file = document.getElementById('file');
file.addEventListener('change', function (event) {
  var files = event.target.files;
      for (var i = 0; i < files.length; i++) {
          var file = files[i];
          console.log(file);
          if (file.type.match('svg')) {
              project.clear();
              project.importSVG(file, function(item) {
                  console.log(item);
                  // console.log('loo');
              });
          }
      }
});
