replaceText(document.body)

function replaceText(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    }
    else if (element.nodeType === Text.TEXT_NODE) {
        if(element.textContent.match(/water/gi)) {
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(water)/gi,
            '<span style="background-color: black; color: black;>$1</span>')
            element.replaceWith(newElement)
        }
    }
}