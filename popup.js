const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
const blacklistedWords = ['fuck', 'shit', 'bitch', 'dick', 'whore', 'asshole', 'cocksucker', 'cunt', 'bastard', 'kys', 'kill yourself', 'moron', 'fatso', 'fatass', 'slut', 'pervert', 'idiot', 'weirdo'];
const toggle = document.querySelector('.container')


function replaceWords(blacklistedWords) {
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < blacklistedWords.length; j++) {
            let originalWord = new RegExp(blacklistedWords[j], 'ig');
            text[i].innerHTML = text[i].innerHTML.replace(originalWord, '<b><i>[REDACTED]</i></b>');
        }
    }
}

var isToggled = false;

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('toggle')

    checkbox.addEventListener('change', function () {
    const refresh = toggle.parentNode.querySelector('.refresh')
    if (checkbox.checked) {
        isToggled = true;
        //replaceText(text);
        replaceWords(blacklistedWords);
        refresh.textContent = isToggled ? 'Censoring is currently active' : 'Refresh page to unredact!'
        console.log('toggled');
    }
    else {
        isToggled = false;
        refresh.textContent = isToggled ? 'Censoring is currently active' : 'Refresh page to unredact!'
        console.log('not toggled');
    }
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
                replaceWords(blacklistedWords);
            }
        }
    });
    checkbox.addEventListener('click', function () {
        console.log(checkbox.checked);
        chrome.runtime.sendMessage({message: 'yo the button turned on'});
        chrome.storage.local.set({ 'enabled': checkbox.checked }, function () {
            console.log("confirmed");
        });
    });
});

// chrome.storage.local.set({"state": "true"});
// chrome.runtime.sendMessage({message: 'yo the button turned on'});
// console.log("message sent");
