// Navbar Elements
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("navigation");
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.querySelectorAll(".nav-link");


// 📱 Mobile Menu Toggle
mobileToggle.addEventListener("click", () => {

    mobileToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

});


// 📜 Navbar Scroll Effect
window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// 🎯 Active Link Highlight
navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");

        // Close menu after click (mobile)
        mobileToggle.classList.remove("active");
        navMenu.classList.remove("active");

    });

});

// ===================================
// BACK TO TOP BUTTON
// ===================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===============================
// SET BACKGROUND IMAGE FROM data-bg
// ===============================
document.querySelectorAll("[data-bg]").forEach((el) => {
  el.style.backgroundImage = `url(${el.dataset.bg})`;
  el.style.backgroundSize = "cover";
  el.style.backgroundPosition = "center";
  el.style.backgroundRepeat = "no-repeat";
});


// ===============================
// MOLECULE ANIMATION
// ===============================
const canvas = document.getElementById("dna-animation");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 80;


// Resize canvas
function resizeCanvas() {
  const banner = canvas.parentElement;
  canvas.width = banner.offsetWidth;
  canvas.height = banner.offsetHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);


// Particle class
class Particle {

  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = (Math.random() * 1 - 0.5);
    this.vy = (Math.random() * 1 - 0.5);

    this.size = Math.random() * 4 + 1;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 4);

    ctx.fillStyle = "#ffffff";
    ctx.fill();
  }

}


// Create particles
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}


// Animation
function animate() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.move();
    p.draw();
  });

  requestAnimationFrame(animate);
}

animate();