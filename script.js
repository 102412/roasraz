
// scroll reveal

const cards = document.querySelectorAll(".reveal");

function reveal(){

cards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

card.classList.add("visible");

}

});

}

window.addEventListener("scroll", reveal);

reveal();




// hidden easter egg 1

document.querySelector(".secret").addEventListener("click", () => {

alert("Easter Egg Found: You’re early.");

});




// easter egg 2 (keyboard)

let code = "";

document.addEventListener("keydown", e => {

code += e.key;

if(code.includes("ads")){

document.body.style.background =
"linear-gradient(45deg, red, black)";

alert("Secret Mode Activated");

code = "";

}

});




// floating parallax glow

document.addEventListener("mousemove", e => {

const x = e.clientX / window.innerWidth;

const y = e.clientY / window.innerHeight;

document.body.style.backgroundPosition =
`${x*50}px ${y*50}px`;

});
