// Saves options to chrome.storage
function save_options() {

    chrome.storage.sync.set({

    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }

  function restore_options() {
    chrome.storage.sync.get({
    }, function(items) {
      build
    });
  }

  readTextFile

  //add listener for submit button
  var form = document.getElementById('file_holder')
  form.addEventListener('submit', function(event) {
    event.preventDefault() //prevents autosubmitting
    var file = document.getElementById('text');
  })

   document.addEventListener('DOMContentLoaded', restore_options);