// let steps = document.querySelector('.steps');
// let textarea = document.querySelector('.textarea');
// let ending = document.querySelector('.ending');
// let ion = document.querySelector('ion-icon');

// steps.onmouseover = function(){
//     textarea.classList.add('active');
//     ending.classList.add('active');
//     ion.classList.add('active');
// }
// steps.onmouseout = function(){
//     textarea.classList.remove('active');
//     ending.classList.remove('active');
//     ion.classList.remove('active');
// }

var  textarea = document.getElementsByClassName('textarea');
var  ending = document.getElementsByClassName('ending');
// var  ion = document.getElementsByClassName('ion-icon');
var  ion = document.getElementsByClassName('class-ion-icon');


function animStep(i){

    console.log(textarea.length)
    textarea[i].classList.add('active');
    ending[i].classList.add('active');
    ion[i].classList.add('active');
}

function animBackStep(i){
      
    textarea[i].classList.remove('active');
        ending[i].classList.remove('active');
        ion[i].classList.remove('active');
    }