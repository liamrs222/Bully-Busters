const toggle = document.querySelector('.container')
var isToggled = false;

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('toggle')
    checkbox.addEventListener('change', function () {
        const refresh = toggle.parentNode.querySelector('.refresh')
        if (checkbox.checked) {
            isToggled = true;
            refresh.textContent = isToggled ? 'Censoring is currently active' : 'Refreshing page to unredact!'
            console.log('toggled');
        }
        else {
            isToggled = false;
            refresh.textContent = isToggled ? 'Censoring is currently active' : 'Refreshing page to unredact!'
            console.log('not toggled');
        }
    });

    var addWord = document.getElementById('blacklist')
    addWord.addEventListener('click', function() {
        const badWord = getElementById('words')
        console.log('Value is currently' + badWord)
        chrome.runtime.sendMessage({message: badWord});
    });
});

var change = false;
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    chrome.storage.local.get('enabled', function (result) {
        if (result.enabled != null) {
            checkbox.checked = result.enabled;
            if(checkbox.checked){
                change = true;
            }
        }
    });
    checkbox.addEventListener('click', function () {
        console.log(checkbox.checked);
        chrome.storage.local.set({ 'enabled': isToggled }, function () {
            console.log("button is on");
        });
        chrome.runtime.sendMessage({message: 'yo the button turned on'});
        chrome.storage.local.set({ 'enabled': checkbox.checked }, function () {
            console.log("confirmed");
        });
    });
});