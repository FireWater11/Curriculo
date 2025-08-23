const slides = document.querySelectorAll(".slide");
let current = 0;

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

const defaultBg = "#333"; // cor padrão
btnPrev.style.background = defaultBg;
btnNext.style.background = defaultBg;

let isHoveringPrev = false;
let isHoveringNext = false;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.className = "slide";
    if (i === current) {
      slide.classList.add("active");
    } else if (i === (current - 1 + slides.length) % slides.length) {
      slide.classList.add("left");
    } else if (i === (current + 1) % slides.length) {
      slide.classList.add("right");
    } else if (i === (current - 2 + slides.length) % slides.length) {
      slide.classList.add("far-left");
    } else if (i === (current + 2) % slides.length) {
      slide.classList.add("far-right");
    }
  });
  // Atualiza cor do botão se estiver com hover
  if(isHoveringPrev) btnPrev.style.background = getActiveSlideColor();
  if(isHoveringNext) btnNext.style.background = getActiveSlideColor();
}

function getActiveSlideColor() {
  const frontActive = slides[current].querySelector(".front");
  return window.getComputedStyle(frontActive).background;
}

// Hover com flag
function addHoverEffect(button, hoverFlagSetter) {
  button.addEventListener("mouseenter", () => {
    hoverFlagSetter(true);
    button.style.background = getActiveSlideColor();
  });
  button.addEventListener("mouseleave", () => {
    hoverFlagSetter(false);
    button.style.background = defaultBg;
  });
}

addHoverEffect(btnPrev, (val) => isHoveringPrev = val);
addHoverEffect(btnNext, (val) => isHoveringNext = val);

// Navegação
btnPrev.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
});

btnNext.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlides();
});

// Clique direto no slide
slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    current = index;
    updateSlides();
  });
});

// Inicializa
updateSlides();


const gitLi = document.getElementById('imagem-git').parentElement;
const whatsLi = document.getElementById('imagem-whats').parentElement;
const linkedinLi = document.getElementById('imagem-linkedin').parentElement;

gitLi.addEventListener('click', () => {
    window.open('https://github.com/FireWater11', '_blank'); 
});

whatsLi.addEventListener('click', () => {
    window.open('https://wa.me/5546988326025', '_blank'); 
});

linkedinLi.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/luidi-augusto-710310359', '_blank'); 
});

document.getElementById('button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Imagens/CurriculoLuidiAugusto.pdf'; 
    link.download = 'CurriculoLuidiAugusto.pdf';   
    link.click();
});

