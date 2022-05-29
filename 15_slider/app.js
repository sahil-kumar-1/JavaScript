const container = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

//   fixing position of slides in slider-container.

const slides = document.querySelectorAll('.slide');

slides.forEach((slide, index)=>{
      slide.style.left = `${index*100}%`;                // slide 1 -> left:0% , slide 2 -> left: 100%      // distance from left end of screen
});


// moving slides based on prev / next button.

let current = 0;

prevBtn.addEventListener('click',()=>{
     current--;
     moveSlides();
});

nextBtn.addEventListener('click',()=>{
     current++;
     moveSlides();
});

function moveSlides(){
     
    /*                                   // design 1:     left to 1st = lasr , right to last = 1st
    if(current == slides.length){
        current = 0;
    }
    if(current < 0){
         current = slides.length-1;
     }                                       */
    

                                            // design 2:     if at right most slide hide next button       , if at 1st slide hide prev button.
    if(current == 0){
        prevBtn.style.display = "none";
    }else{
        prevBtn.style.display = "block";
    }
    
    if(current == slides.length-1){
        nextBtn.style.display = "none";
    }else{
        nextBtn.style.display = "block";
    }
     
    // console.log(current);
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${current * 100}%)`;
    });
}
/*         // design 3:             to rotate slide after every 1sec
setInterval(rotateSlides,1000);
function rotateSlides(){
    current++;
    moveSlides();
}                     */