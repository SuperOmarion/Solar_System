const sun = document.querySelector('.sun');
const earth = document.querySelector('.earth');
const earthCircle = document.querySelector('.earth-circle');
const moon = document.querySelector('.moon');
const moonCircle = document.querySelector('.moon-circle');
const mars = document.querySelector('.mars');
const marsCircle = document.querySelector('.mars-circle');

const starFieldWidth = 1500;
const starFieldHeight = 700;

var sunAngle = 0;
var earthAngle = 0;
var moonAngle = 0;
var marsAngle = 0;

function animateSolarSystem() {
    sun.style.transform = `rotate(${sunAngle}deg)`;
    earth.style.transform = `rotate(${earthAngle}deg)`;
    earthCircle.style.transform = `rotate(${earthAngle}deg)`;
    moon.style.transform = `rotate(${moonAngle}deg)`;
    moonCircle.style.transform = `rotate(${moonAngle}deg)`;
    mars.style.transform = `rotate(${marsAngle}deg)`;
    marsCircle.style.transform = `rotate(${marsAngle}deg)`;

    sunAngle += 0.1;
    earthAngle += 0.2;
    moonAngle += 0.5;
    marsAngle += 0.4;
}

function addStars(starFieldWidth, starFieldHeight, noOfStars) {
    var starField = document.getElementById('star-field');
    var numberOfStars = noOfStars;
    
    for (var i = 0; i < numberOfStars; i++) {
      var star = document.createElement('div');
        star.className = 'star';
      var topOffset = Math.floor((Math.random() * starFieldHeight) + 1);
      var leftOffset = Math.floor((Math.random() * starFieldWidth) + 1);
      star.style.top = topOffset + 'px';
      star.style.left = leftOffset + 'px';
      star.style.position = 'absolute';
        starField.appendChild(star);
    }
}
  
function animateStars(starFieldWidth, speed) {
    var starField = document.getElementById('star-field');
    var stars = starField.childNodes;

    for (var i = 1; i < stars.length; i++) {
        stars[i].className = 'star' + ' ' + getStarColor(i) + ' ' + getStarDistance(i); 
  
        var currentLeft = parseInt(stars[i].style.left, 10);
        var leftChangeAmount = speed + getStarRelativeSpeed(i);
        var leftDiff;
        if (currentLeft - leftChangeAmount < 0) {
          leftDiff = currentLeft - leftChangeAmount + starFieldWidth;
        }
        else {
          leftDiff = currentLeft - leftChangeAmount;
        }
        stars[i].style.left = (leftDiff) + 'px';
      }
}

function getStarColor(index) {
    if (index % 8 == 0)
      return 'red';
    else if (index % 10 == 0)
      return 'yellow';
    else if (index % 17 == 0)
      return 'blue';
    else
      return 'white';
  }
  
  function getStarDistance(index) {
    if (index % 6 == 0)
      return '';
    else if (index % 9 == 0)
      return 'near';
    else if (index % 2 == 0)
      return 'far';
    else
      return 0;
  }
  
  function getStarRelativeSpeed(index) {
    if (index % 6 == 0)
      return 1;
    else if (index % 9 == 0)
      return 2;
    else if (index % 2 == 0)
      return -1;
    else
      return 0;
  }

addStars(starFieldWidth, starFieldHeight, 150);
    
setInterval(function() { 
    animateSolarSystem();
    animateStars(starFieldWidth, 0.1); 
}, 20);
  
