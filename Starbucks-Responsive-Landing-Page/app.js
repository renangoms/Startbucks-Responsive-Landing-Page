function imgSlider(anything){
    document.querySelector('.starbucks').src = anything
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


// Dark Mode

let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');

themeSwitch.onclick = function(){
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');

        if(localStorage.getItem('active')) {
            localStorage.removeItem('active');
            console.log("removido");
        } else {
            localStorage.setItem('active', true);
        }
}

// Dark Mode - Page Load
document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem('active')) {
        themeSwitch.classList.toggle('active');
        body.classList.toggle('dark');
    }
  });
