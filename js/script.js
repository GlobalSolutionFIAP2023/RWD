const home = document.querySelector(".home");
const agricultura = document.querySelector(".agricultura");
const inteligencia = document.querySelector(".inteligencia");
const cultivo = document.querySelector(".cultivo");
const contato = document.querySelector(".contato");

home.addEventListener('click', ()=>{
    window.location.href = "../index.html";
})

agricultura.addEventListener('click', ()=>{
    window.location.href = "../paginas/agro-sustentavel.html";
})

inteligencia.addEventListener('click', ()=>{
    window.location.href = "../paginas/IA-generativas.html";
})

cultivo.addEventListener('click', ()=>{
    window.location.href = "../paginas/cultivos-eficientes.html";
})

contato.addEventListener('click', ()=>{
    window.location.href = "../paginas/contato.html";
})