

// scroll progress bar

window.addEventListener("scroll", () => {

const scroll = window.scrollY
const height = document.body.scrollHeight - window.innerHeight

document.getElementById("progress").style.width =
(scroll / height) * 100 + "%"

})




// scroll reveal

const reveals = document.querySelectorAll(".reveal")

function reveal(){

reveals.forEach(el => {

const top = el.getBoundingClientRect().top

if(top < window.innerHeight - 100){

el.classList.add("visible")

}

})

}

window.addEventListener("scroll", reveal)
reveal()




// cursor glow

document.addEventListener("mousemove", e => {

const glow = document.getElementById("cursorGlow")

glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"

})




// 3D tilt cards

const cards = document.querySelectorAll(".tilt")

cards.forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

const centerX = rect.width/2
const centerY = rect.height/2

const rotateX = (y-centerY)/10
const rotateY = (centerX-x)/10

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

})

card.addEventListener("mouseleave", () => {

card.style.transform = "rotateX(0) rotateY(0)"

})

})




// particle background

const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.5

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.y += p.speed

if(p.y > canvas.height) p.y = 0

ctx.fillStyle="rgba(255,0,0,0.3)"
ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()



// easter egg

let code = ""

document.addEventListener("keydown", e => {

code += e.key

if(code.includes("redline")){

document.body.style.background =
"linear-gradient(45deg,#ff0000,#000)"

alert("Developer Mode")

code = ""

}

})




// footer secret

document.querySelector(".egg").addEventListener("click", () => {

window.location.href = "https://google.com"

})
