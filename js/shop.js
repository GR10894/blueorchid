let dropDown = document.querySelector('.menu');
let dropDownBtn = document.querySelector('.dropDown');

dropDownBtn.addEventListener('click' , function toogle () {
    dropDown.classList.toggle('active');
})