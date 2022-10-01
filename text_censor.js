const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

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