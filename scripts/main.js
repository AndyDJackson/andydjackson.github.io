var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/themba1.jpg') {
      myImage.setAttribute ('src','images/themba2.jpg');
    } else {
      myImage.setAttribute ('src','images/themba1.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Themba loves you, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Themba loves you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}