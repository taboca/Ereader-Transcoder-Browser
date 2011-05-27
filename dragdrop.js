function onDrop(event) {

  event.stopPropagation(); 
  event.preventDefault(); 

  var dt = event.dataTransfer;
  var files = dt.files;
  var count = files.length;
  totalCount=0;
  totalCount += count;
  for (var i = 0; i < count; i++) {
    console.log(" File " + i + ":\n");
    var types = dt.mozTypesAt(i);
    for (var t = 0; t < types.length; t++) {
       console.log("  " + types[t] + ": ");
        if (types[t] == "text/uri-list") { 
            console.log("URI is " + data);
        } 
        if (types[t] == "application/x-moz-file") {
          try {
            var data = files[i];
            console.log("(" + (typeof data) + ") : <" + data + " > " + data.fileName + " " + data.fileSize + "\n");
          } catch (ex) {
            console.log("<<error>>\n");
          }
        }
    }
  }
}

