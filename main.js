const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "C:\Users\ardem\OneDrive\Documents\Y3 S2\DS 4200\hw1\images\cat.jpg") {
    myImage.setAttribute("src", "C:\Users\ardem\OneDrive\Documents\Y3 S2\DS 4200\hw1\images\cat2.jpg");
  } else {
    myImage.setAttribute("src", "C:\Users\ardem\OneDrive\Documents\Y3 S2\DS 4200\hw1\images\cat.jpg");
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
    myHeading.textContent = `Hey, ${myName}, look at my cat`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hey, ${storedName}, look at my cat`;
}
myButton.onclick = () => {
  setUserName();
};