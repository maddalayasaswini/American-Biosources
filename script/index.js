// ===================================
// DATA
// ===================================
const productsData = {
    pharmaceuticals: {
        title: "Pharmaceuticals",
        icon: "fas fa-pills",
        description: "Advanced pharmaceutical formulations targeting critical therapeutic areas.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
        heading1: "Key Features",
        points1: [
            "Novel drug delivery systems",
            "Targeted therapeutic formulations",
            "Enhanced bioavailability"
        ],
        heading2: "Applications",
        points2: [
            "Cardiovascular",
            "Oncology",
            "Neurological disorders"
        ]
    }
    // 👉 Remaining categories same structure lo add cheyyachu
};

const data = [
    {
        title: "Drug Discovery & Research",
        img: "./assets/images/services/1.jpg",
        desc: "End-to-end drug discovery solutions.",
        points: ["Target identification", "Biomarker discovery", "Preclinical studies"]
    },
    {
        title: "Clinical Research Services",
        img: "./assets/images/services/2.jpg",
        desc: "Supporting clinical trials.",
        points: ["Trial management", "Patient monitoring", "Data analysis"]
    }
];

// ===================================
// INIT
// ===================================
document.addEventListener("DOMContentLoaded", () => {
    initializeProductCards();
    initializeModal();
    initializeAnimations();
    initializeCounters();
    initializeCTAButtons();
    initializeLazyLoading();

    console.log("✅ Page Loaded Cleanly");
});

// ===================================
// PRODUCT CARDS
// ===================================
function initializeProductCards() {
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", () => {
            const category = card.dataset.category;
            if (productsData[category]) {
                showProductModal(productsData[category]);
            }
        });

        // Accessibility
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
    });
}

// ===================================
// MODAL
// ===================================
function initializeModal() {
    const modal = document.getElementById("productModal");

    document.querySelector(".modal-close")?.addEventListener("click", closeModal);
    document.querySelector(".modal-overlay")?.addEventListener("click", closeModal);

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeModal();
    });
}

function showProductModal(data) {
    const modal = document.getElementById("productModal");

    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-description").innerText = data.description;
    document.getElementById("modal-img").src = data.image;

    updateList("modal-points1", data.points1);
    updateList("modal-points2", data.points2);

    modal.style.display = "block";
    setTimeout(() => modal.classList.add("show"), 10);

    document.body.style.overflow = "hidden";
}

function updateList(id, items) {
    const el = document.getElementById(id);
    el.innerHTML = items.map(i => `<li>${i}</li>`).join("");
}

function closeModal() {
    const modal = document.getElementById("productModal");

    modal.classList.remove("show");
    setTimeout(() => (modal.style.display = "none"), 300);

    document.body.style.overflow = "";
}

// ===================================
// POPUP (SERVICES)
// ===================================
function openPopup(index) {
    const popup = document.getElementById("popup");

    document.getElementById("popup-title").innerText = data[index].title;
    document.getElementById("popup-desc").innerText = data[index].desc;
    document.getElementById("popup-img").src = data[index].img;

    document.getElementById("popup-points").innerHTML =
        data[index].points.map(p => `<li>${p}</li>`).join("");

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "";
}

// safer click handler
window.addEventListener("click", e => {
    const popup = document.getElementById("popup");
    if (e.target === popup) closePopup();
});

// ===================================
// ANIMATIONS
// ===================================
function initializeAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade-in-up, .slide-in-left, .slide-in-right")
        .forEach(el => observer.observe(el));
}

// ===================================
// COUNTER
// ===================================
function initializeCounters() {
    document.querySelectorAll(".stat-number").forEach(counter => {
        const target = +counter.dataset.count;

        let count = 0;
        const step = target / 100;

        const update = () => {
            count += step;
            if (count < target) {
                counter.innerText = Math.floor(count);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target + "+";
            }
        };

        update();
    });
}

// ===================================
// CTA BUTTONS
// ===================================
function initializeCTAButtons() {
    document.querySelectorAll(".cta-primary").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".contact-section")?.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

// ===================================
// LAZY LOAD
// ===================================
function initializeLazyLoading() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll("img[loading='lazy']")
        .forEach(img => observer.observe(img));
}