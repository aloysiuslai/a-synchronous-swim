(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  //Invoke setInterval on the swimFetch, we would pass a callback - we should pass console.log - afterwards we'll pass the SwimTeam.move

  //Define our swim fetch function with inner ajax function - the function will accept a callback
  let swimFetch = (callback) => {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      success: data => {
        SwimTeam.move(data);
      },
      error: error => {
        console.log(error);
      }
    });
  };

  setInterval(swimFetch, 250);

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUpload = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl + '/uploadImage',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUpload(file);
  });

})();
