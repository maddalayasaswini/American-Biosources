const sections = document.querySelectorAll(".content-block");
const navLinks = document.querySelectorAll(".nav-pill");

/* CLICK EVENT */

navLinks.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

/* remove old active */
navLinks.forEach(btn => btn.classList.remove("active"));

/* add active to clicked */
this.classList.add("active");

/* scroll */
const target = document.querySelector(this.getAttribute("href"));

window.scrollTo({
top: target.offsetTop - 100,
behavior: "smooth"
});

});

});


/* SCROLL DETECTION */

window.addEventListener("scroll", () => {

let currentSection = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 200;

if(pageYOffset >= sectionTop){
currentSection = section.getAttribute("id");
}

});

if(currentSection){

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + currentSection){
link.classList.add("active");
}

});

}

});