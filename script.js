var intervalID = window.setInterval(nextSlide, 5000);
let menuToggle = document.querySelector('.menuToggle');
let nav = document.querySelector('.nav');

var sliderInputs =  document.getElementsByName('slider');

  function nextSlide(){
    // console.log("sadas")
 for(var i = 0; i < sliderInputs.length; i++){
    if(sliderInputs[i].checked){
        sliderInputs[i==2?0:i+1].checked=true;
        i=10;
    }
 }
}
function prevSlide(){
    for(var i = 0; i < sliderInputs.length; i++){
        if(sliderInputs[i].checked){
            sliderInputs[i==0?2:i-1].checked=true;
            i=10;
        }
     }
}


menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}