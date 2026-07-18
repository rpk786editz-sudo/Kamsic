/* ==========================================
   KAMSIC Official Website
   script.js
========================================== */

// Loading Screen

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1000);

});



// Navbar Background

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});



// AOS

AOS.init({

duration:1000,

once:true,

offset:100

});



// GSAP Hero Animation

gsap.from(".subtitle",{

opacity:0,

y:40,

duration:1

});

gsap.from(".hero-content h1",{

opacity:0,

y:70,

duration:1.4,

delay:.4

});

gsap.from(".tagline",{

opacity:0,

y:40,

duration:1,

delay:.8

});

gsap.from(".hero-buttons",{

opacity:0,

y:40,

duration:1,

delay:1.2

});

gsap.from(".scroll-down",{

opacity:0,

duration:1,

delay:1.8

});
