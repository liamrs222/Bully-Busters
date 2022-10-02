const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
const blacklistedWords = ['fuck', 'shit', 'bitch', 'dick', 'whore', 'asshole', 'cocksucker', 'cunt', 'bastard', 'kys', 'kill yourself', 'moron', 'fatso', 'fatass', 'slut', 'pervert', 'idiot', 'weirdo'];

function replaceWords(blacklistedWords) {
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < blacklistedWords.length; j++) {
            let originalWord = new RegExp(blacklistedWords[j], 'ig');
            text[i].innerHTML = text[i].innerHTML.replace(originalWord, '<b><i>[REDACTED]</i></b>');
        }
    }
}

replaceWords(blacklistedWords);

// if(isToggled) {
//     replaceText(text);
// }


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.message === 'yo the button turned on') {
//         chrome.storage.local.get("state", value => {
//             console.log (value);
//         })
//     }
// })
