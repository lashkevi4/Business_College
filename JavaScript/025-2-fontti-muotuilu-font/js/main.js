let fontFamily = "Courier New";
let index = 0;
let fontList = ["Courier New", "Roboto", "Mansalva", "Grenze", "Turret Road"]

function changeFont() {
    document.body.style.fontFamily = fontList[index]
    showCurrentFont();
    index++;
    if (index === fontList.length) {
        index = 0;
    }
}

function showCurrentFont() {
    document.getElementById('current-size').innerHTML = `"${fontList[index]}"`
}