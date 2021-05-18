//changes cat image on click
let myImage=document.querySelector('img');
myImage.onclick = function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/cat.jpeg'){
        myImage.setAttribute('src','images/cat.jpeg');
    }else {
        myImage.setAttribute('src','images/cat1.jpeg');
    }
}
//change the text in h1 to greet user when button clicked
let myButton = document.querySelector('button'); //gets element
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName); //stores user input
         myHeading.textContent = 'Wel come, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) { //checks if the name value already exists
    setUserName(); // calls this function to request name if it does not already stored
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }