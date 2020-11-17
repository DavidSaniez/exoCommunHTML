const slides = document.querySelectorAll('.slide');
const prevSlideButton = document.querySelector('.prev-btn');
const nextSlideButton = document.querySelector('.next-btn')

let i = 0;
currentSlide = document.querySelector('.slide.active')


const next = () => {

    slides[i].classList.remove("active");

    i++;

    console.log(i)
    if(i == slides.length) {
        i = 0;
    }

    slides[i].classList.add("active");

    currentSlide = document.querySelector('.slide.active')
    

}

const previous = () => {

    slides[i].classList.remove("active");

    if (i == 0){
         i = slides.length-1;

     } else {
        
         i--;
     }
     console.log("prev: " + i)


   slides[i].classList.add("active");

   currentSlide = document.querySelector('.slide.active')
}

prevSlideButton.addEventListener('click', previous)
nextSlideButton.addEventListener('click', next)