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
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    chrome.storage.sync.get({

    }, function(items) {
        createListeners();
    });
  }

  //add listener for submit button
  document.querySelector('.submit_button').addEventListener('click', function(){
    var file = document.querySelector('file_holder').innerHTML;
  })
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);