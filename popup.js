document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('toggle')
  
    checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        isToggled = true;
        console.log('toggled');
    } 
    else {
        isToggled = false;
        console.log('not toggled');
    }
    });
});