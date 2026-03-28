// SPLASH SCREEN (2 SEGUNDOS)
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 2000);
});

// LOGICA MULTI-STEP
const steps = Array.from(document.querySelectorAll(".form-step"));
const nextBtns = document.querySelectorAll(".btn-next");
const prevBtns = document.querySelectorAll(".btn-prev");
const progressItems = document.querySelectorAll(".step-item");
const progressBar = document.getElementById("progressBar");

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (validateInputs()) changeStep(1);
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener("click", () => changeStep(-1));
});

function changeStep(dir) {
    const active = document.querySelector(".form-step.active");
    let index = steps.indexOf(active);
    steps[index].classList.remove("active");
    progressItems[index].classList.remove("active");
    index += dir;
    steps[index].classList.add("active");
    progressItems[index].classList.add("active");
    progressBar.style.width = (index / (steps.length - 1)) * 100 + "%";
    window.scrollTo(0,0);
}

function validateInputs() {
    const active = document.querySelector(".form-step.active");
    const required = active.querySelectorAll("[required]");
    let ok = true;
    required.forEach(i => {
        if (!i.value) { i.style.borderColor = "red"; ok = false; }
        else { i.style.borderColor = "#eee"; }
    });
    return ok;
}

// ENVIO WHATSAPP
const form = document.getElementById("multiStepForm");
const modal = document.getElementById("modal-aviso");
const btnEntendido = document.getElementById("btn-entendido");
let globalUrl = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let texto = "⭐ *SIRIUS - FICHA DE CADASTRO* ⭐\n\n";

    formData.forEach((value, key) => {
        if (!(value instanceof File) && value.trim() !== "") {
            texto += `*${key.replace('_', ' ')}:* ${value}\n`;
        }
    });

    const fone = "559291404115";
    // Usando o link mais agressivo para abrir o App direto
    globalUrl = `https://api.whatsapp.com/send?phone=${fone}&text=${encodeURIComponent(texto)}`;
    
    // MOSTRAR AVISO PISCANDO
    modal.style.display = "flex";
});

btnEntendido.addEventListener("click", () => {
    window.location.href = globalUrl;
});
