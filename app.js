//jshint esversion:6

const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');
const design1 = document.querySelector('.design1');
const design2 = document.querySelector('.design2');
const design3 = document.querySelector('.design3');
const design4 = document.querySelector('.design4');


design1.addEventListener('click', () => {
    link1.classList.toggle('active')
})

design2.addEventListener('click', () => {
    link2.classList.toggle('active')
})

design3.addEventListener('click', () => {
    link3.classList.toggle('active')
})

design4.addEventListener('click', () => {
    link4.classList.toggle('active')
})