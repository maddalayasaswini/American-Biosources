const data = [
  {
    title: "Drug Discovery & Research",
    img: "./assets/images/services/1.jpg",
    desc: "We provide end-to-end drug discovery solutions.",
    points: [
      "Target identification",
      "Biomarker discovery",
      "Preclinical studies",
      "Advanced research tools"
    ]
  },
  {
    title: "Clinical Research Services",
    img: "./assets/images/services/2.jpg",
    desc: "Supporting all phases of clinical trials.",
    points: [
      "Trial management",
      "Patient monitoring",
      "Data analysis",
      "Medical reporting"
    ]
  },
  {
    title: "Manufacturing (CDMO)",
    img: "./assets/images/services/3.jpg",
    desc: "Reliable pharmaceutical manufacturing.",
    points: [
      "API production",
      "Formulation",
      "Scale-up",
      "Packaging"
    ]
  },
  {
    title: "Analytical Testing",
    img: "./assets/images/services/4.jpg",
    desc: "Ensuring safety and quality standards.",
    points: [
      "Stability testing",
      "Bioanalysis",
      "Microbiology",
      "Quality assurance"
    ]
  },
  {
    title: "Regulatory Consulting",
    img: "./assets/images/services/5.jpg",
    desc: "Helping navigate regulatory frameworks.",
    points: [
      "FDA submissions",
      "Compliance",
      "Documentation",
      "Market strategy"
    ]
  }
];

function openPopup(index){
  document.getElementById("popup").style.display = "flex";

  // 🔥 STOP background scroll
  document.body.style.overflow = "hidden";

  document.getElementById("popup-title").innerText = data[index].title;
  document.getElementById("popup-desc").innerText = data[index].desc;
  document.getElementById("popup-img").src = data[index].img;

  let list = "";
  data[index].points.forEach(p => {
    list += `<li>${p}</li>`;
  });
  document.getElementById("popup-points").innerHTML = list;
}

function closePopup(){
  document.getElementById("popup").style.display = "none";

  // 🔥 ENABLE scroll back
  document.body.style.overflow = "auto";
}

window.onclick = function(e){
  const popup = document.getElementById("popup");
  if(e.target === popup){
    closePopup();
  }
}