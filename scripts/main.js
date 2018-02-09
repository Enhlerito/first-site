var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/P1.jpg') {
      myImage.setAttribute ('src','images/P2.jpg');
    } else {
      myImage.setAttribute ('src','images/P1.jpg');
    }
}

var myButton = document.getElementById('button');
var myHeading = document.querySelector('button')('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my site, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Its nice to have you back, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
