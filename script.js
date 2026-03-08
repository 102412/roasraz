

/* scroll progress */

window.addEventListener("scroll",()=>{

let scroll=window.scrollY
let height=document.body.scrollHeight-window.innerHeight

document.getElementById("progress").style.width=(scroll/height)*100+"%"

})



/* cursor glow */

document.addEventListener("mousemove",e=>{

const glow=document.getElementById("cursorGlow")

glow.style.left=e.clientX+"px"
glow.style.top=e.clientY+"px"

})



/* floating orb scroll motion */

window.addEventListener("scroll",()=>{

const orb=document.getElementById("orb")

let y=window.scrollY

orb.style.transform=`translate(${y*0.15}px,${y*0.3}px)`

})



/* reveal */

const reveals=document.querySelectorAll(".reveal")

function reveal(){

reveals.forEach(el=>{

let top=el.getBoundingClientRect().top

if(top<window.innerHeight-100){

el.classList.add("visible")

}

})

}

window.addEventListener("scroll",reveal)



/* 3d tilt */

document.querySelectorAll(".tilt").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect()

const x=e.clientX-rect.left
const y=e.clientY-rect.top

const centerX=rect.width/2
const centerY=rect.height/2

const rotateX=(y-centerY)/8
const rotateY=(centerX-x)/8

card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

})

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)"

})

})



/* particles */

const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
speed:Math.random()*0.6,
size:Math.random()*2

})

}

function animate(
