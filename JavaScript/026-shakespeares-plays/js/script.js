const unorderList = document.getElementById('first-ul');
unorderList.style.display = 'flex';
unorderList.style.listStyle = 'none';
unorderList.style.backgroundColor

const child = document.querySelectorAll('.first-ul-ul')


for (let i = 0; i < child.length; i++) {
    child[i].style.cssText = `
    margin: 1rem;
    background-color: #bebebe;
    `;
}

const links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
    links[i].style.cssText = `
    text-decoration-style: dotted;
    color: brown;
    font-weight: 600;
    font-style: italic;
    `;
}

links.forEach((element) => {
    if (element.href.includes('.pdf')) {
        let pdfLogo = document.createElement('i');
        pdfLogo.classList.add('fa-solid', 'fa-file-pdf', 'pdf-style');
        element.appendChild(pdfLogo);
    }

    if (element.href.includes('mailto')) {
        let mailLogo = document.createElement('i');
        mailLogo.classList.add('fa-regular', 'fa-envelope');
        element.appendChild(mailLogo);
        element.insertBefore(mailLogo, element.firstChild);
    }


    const isExternalLink = (url) => {
        element.href = url;
        return element.host !== window.location.host;
    };
    if (isExternalLink(element)) {
        const exLink = document.createElement('i');
        exLink.classList.add('fa-solid', 'fa-up-right-from-square', 'share-logo');
        element.appendChild(exLink);
        element.insertBefore(exLink, element.firstChild)
    }
})

const tableRow = document.querySelectorAll('tr');

for (let i = 1; i < tableRow.length; i++) {
    tableRow[i].style.backgroundColor = '#bebebe';
    if (i % 2 == 0) {
        tableRow[i].style.backgroundColor = '#ffffff';
    }
}

