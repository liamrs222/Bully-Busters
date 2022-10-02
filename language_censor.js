const badwords = ['fuck', 'fucking', 'shit', 'bitch'];

replaceText(document.body)

function replaceText(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    }
    else if (element.nodeType === Text.TEXT_NODE) {
        for(var i = 0; i < badwords.length; i++)
        {
            var regex = new RegExp(badwords[i], "gi");
            if(element.textContent.match(regex)) {
                const newElement = document.createElement('span')
                newElement.innerHTML = element.textContent.replace(regex,
                '<span style="background-color: black; color: black;>$1</span>')
                element.replaceWith(newElement)
            }
        }
        
    }
}
