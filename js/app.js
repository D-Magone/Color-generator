const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor  = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}


// SIMPLEFIED VERSION WITH PREDETERMINED COLORS

// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// const btn = document.getElementById('btn');
// const color = document.querySelector('.color');

// btn.addEventListener('click', function(){
//     //get random number between 0- - index const colors
//     const randomNumber = getRandomNumber();
//     document.body.style.backgroundColor = colors[randomNumber]; //liek lapai mainīt bacground color
//     color.textContent = colors[randomNumber]; // maina spanā krāsas kodu
// });

// function getRandomNumber(){
//     return Math.floor(Math.random() * colors.length); //tagad random dos no 0.kaut kas līdz 3.kaut kas - paraizināja ar const colors garumu
// }