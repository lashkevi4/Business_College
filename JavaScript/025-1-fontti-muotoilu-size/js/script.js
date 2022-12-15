let fontSize = 16;

function changeFont() {
    let list = document.getElementById('list');
    if (fontSize === 32) {
        fontSize = 12;
    }
    fontSize += 4
    list.style.fontSize = fontSize + 'px';

    showCurrentSize();
}

function showCurrentSize() {
    document.getElementById('current-size').innerHTML = `${fontSize} px`
}