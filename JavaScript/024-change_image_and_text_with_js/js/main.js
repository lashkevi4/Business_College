//let myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!!!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./img/firefox.png") {
    myImage.setAttribute("src", "./img/chrome.png");
    myHeading.textContent = "Hello world!!!";
  } else {
    myImage.setAttribute("src", "./img/firefox.png");
    myHeading.textContent = "Mozilla is cool";
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};


