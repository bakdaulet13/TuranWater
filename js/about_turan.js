autoSlider();
var left = 0;
var timer=0;
function sliderLeft(){
    var polosa = document.getElementById('bottling_slider_path');
   
    if(left<-4200 || left==0){
        polosa.style.transition='none';
        left=0;
    }else{
        polosa.style.transition='all ease 2s';
    }
    polosa.style.left=left+'px';
    left=left-600;
    autoSlider();
}
function autoSlider(){
    timer=setTimeout(sliderLeft,2000);
}

var animItems = document.querySelectorAll('._animator');

window.addEventListener('scroll',animOnScroll);
function animOnScroll(){
    for (let i = 0; i < animItems.length; i++) {

        var elem = animItems[i];
        var distInView = elem.getBoundingClientRect().top - window.innerHeight;
        if (distInView < 0) {
            console.log("yes");
            elem.classList.add("_active");
        } else {
            elem.classList.remove("_active");
        }
    }
}


var bublle1 = document.getElementById('first');
var bublle2 = document.getElementById('second');
var bublle3 = document.getElementById('third');
var bubbles = [];
bubbles[0] = bublle1;
bubbles[1] = bublle2;
bubbles[2] = bublle3;
function bub(){
    for (let i = 0; i < bubbles.length; i++) {
        var elem = bubbles[i];
        var distInView = elem.getBoundingClientRect().top - window.innerHeight;
        if (distInView < 0) {
            console.log("yes");
            elem.classList.add("_active");
        } else {
            elem.classList.remove("_active");
        }
    }
}