document.addEventListener("DOMContentLoaded", function(){

const sections = document.querySelectorAll(".section")
const navLinks = document.querySelectorAll(".chapter-link")

navLinks.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
})

})

})

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

navLinks.forEach(link=>{
link.classList.remove("active")

if(link.getAttribute("href").substring(1) === entry.target.id){
link.classList.add("active")
}

})

}

})

},{
threshold:0.6
})

sections.forEach(section=>{
observer.observe(section)
})

})