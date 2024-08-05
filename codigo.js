let auto = document.querySelector('.auto');
let volante = document.querySelector('.volante');
let caja = document.querySelector('.pista');

let p = {
 x:innerWidth/2-25,
 xv:0,
 y:450,
 r:0
}

let tiempo = 0;
let valor = 0;
let velocidad = 5;
let animate = ()=>{
window.requestAnimationFrame(animate);

p.x += p.xv;

auto.style.transform = `translatex(${p.x}px) translatey(${p.y}px) rotate(${p.r}deg)`

if(p.x + 50 > innerWidth || p.x < 0) {
   p.xv = 0;
};

tiempo++;
if(tiempo % 80 == 0) {
 let x = Math.random()*200;
 valor = -Math.random()*2+Math.random()*2;
 let n = document.createElement('div'); 
 caja.appendChild(n);
 n.classList.add('autos');
 n.style.left = x+'px';
 n.style.top = "-100px"; 
}
mover();
choque();

};
animate();

setInterval(function() { 
 let l = document.createElement('div'); 
 caja.appendChild(l);
 l.classList.add('lineas');
  setInterval(function () {
   l.remove();
  },700) 
},150)



let b = document.querySelectorAll('.btn');

b[0].addEventListener('touchstart',()=>{
 p.xv = -3;
 volante.style.transform = 'rotate(-45deg)'
 if(p.x < 0) {
    p.xv = 0;
}
p.r = -5;
})

b[1].addEventListener('touchstart',()=>{
 velocidad = 10;
})

b[1].addEventListener('touchend',()=>{
 velocidad = 5;
})


b[2].addEventListener('touchstart',()=>{
 p.xv = 3;
 volante.style.transform = 'rotate(45deg)'
 if(p.x + 50 > innerWidth) {
   p.xv = 0;
 }
p.r = 5
})


function mover() {
 let muchos = document.querySelectorAll('.autos');
let xv = -Math.random()*2+Math.random()*2;
 muchos.forEach((e,i)=>{
e.style.transform += `translatey(${velocidad}px)
                      translatex(${valor}px)`;
 if(e.getBoundingClientRect().x > 250) {
    valor = 0;
 }
 if(e.getBoundingClientRect().x < 
    caja.getBoundingClientRect().x + 10) {
    valor = 0;
 }
 if(e.getBoundingClientRect().y + 80 >
    caja.getBoundingClientRect().height + 100) {
    e.remove();
  }
 });
}

function choque() {
 let muchos = document.querySelectorAll('.autos');
 muchos.forEach((e,i)=>{
 let x = e.getBoundingClientRect().x;
 let y = e.getBoundingClientRect().y;
 if(p.y < y + 80 && 
    p.y + 80 > y && 
    p.x + 50 > x && 
    p.x < x + 50) {
  e.style.backgroundImage = 'url(explosion.png)'
    e.style.width = '80px'
    //e.remove()
    p.r = 360;
    auto.style.transformOrigin = 'center'
 }
 });
}














