function loadCopyright(givenContainer) {
    const copyrightContainer = document.createElement('div');
    copyrightContainer.classList.add('copyright');

    let paragraphLine = document.createElement('p');

    let textLine = document.createElement('p');
    let linkLine = document.createElement('a');
    textLine.textContent = '© 2024; All content on this site is licensed under ';
    linkLine.setAttribute('href', 'https://raw.githubusercontent.com/npwng/CV/main/LICENSE.txt');
    linkLine.textContent = 'Creative Commons Attribution 3.0 Unported';
    paragraphLine.appendChild(textLine);
    linkLine.classList.add('linkto');
    textLine.appendChild(linkLine);
    copyrightContainer.appendChild(textLine);


    textLine = document.createElement('p');
    linkLine = document.createElement('a');
    textLine.textContent = 'This website is based on a template by ';
    linkLine.setAttribute('href', 'https://html5up.net');
    linkLine.textContent = 'HTML5 UP';
    paragraphLine.appendChild(textLine);
    linkLine.classList.add('linkto');
    textLine.appendChild(linkLine);

    linkLine = document.createElement('a')
    textLine.appendChild(document.createTextNode(', which has been modified by '));
    linkLine.setAttribute('href', 'https://github.com/npwng');
    linkLine.textContent = 'me';
    linkLine.classList.add('linkto');
    textLine.appendChild(linkLine);
    copyrightContainer.appendChild(textLine);


    givenContainer.parentNode.replaceChild(copyrightContainer, givenContainer);
}


function loadRaw(givenContainer) {
    const filename = location.href.split("/").slice(-1).toString();
    const filepath = './raw/' + filename;

    const linkContainer = document.createElement('p');

    const rawHyperlink = document.createElement('a');
    rawHyperlink.setAttribute('href', filepath);
    rawHyperlink.textContent = '→Raw Site←';
    rawHyperlink.classList.add('linkto');
    linkContainer.appendChild(rawHyperlink)

    givenContainer.parentNode.replaceChild(linkContainer, givenContainer);
}

// This website is based on a template by [Original Template Author], which has been modified by [Your Name or Organization].