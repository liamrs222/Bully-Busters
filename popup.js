const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
function replaceText(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i].innerHTML.includes('Fuck')) {
            text[i].innerHTML = text[i].innerHTML.replace('Fuck', 'derek');
        }
        else if (text[i].innerHTML.includes('fuck')) {
            text[i].innerHTML = text[i].innerHTML.replace('fuck', 'derek');
        }
        else if (text[i].innerHTML.includes('FUCK')) {
            text[i].innerHTML = text[i].innerHTML.replace('FUCK', 'derek');
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('toggle')

    checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        isToggled = true;
        replaceText(text);
        console.log('toggled');
    } 
    else {
        isToggled = false;
        console.log('not toggled');
    }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    chrome.storage.local.get('enabled', function (result) {
        if (result.enabled != null) {
            checkbox.checked = result.enabled;
            if(checkbox.checked)
            {
                replaceText(text);
            }
        }
    });
    checkbox.addEventListener('click', function () {
        console.log(checkbox.checked);
        chrome.storage.local.set({ 'enabled': checkbox.checked }, function () {
            console.log("confirmed");
        });
    });
});

