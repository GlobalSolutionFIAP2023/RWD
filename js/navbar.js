const home = document.querySelector(".home");
const agricultura = document.querySelector(".agricultura");
const inteligencia = document.querySelector(".inteligencia");
const cultivo = document.querySelector(".cultivo");
const contato = document.querySelector(".contato");

home.addEventListener('click', ()=>{
    if(document.URL.includes("index.html")){
        window.location.href = "./index.html";
    }
    else{
        window.location.href = "../index.html";
    }   
})

agricultura.addEventListener('click', ()=>{
    if(document.URL.includes("index.html")){
        window.location.href = "./paginas/agro-sustentavel.html";

    }
    else if(!document.URL.includes("index.html")){
        window.location.href = "./agro-sustentavel.html";
    }
})

inteligencia.addEventListener('click', ()=>{
    if(document.URL.includes("index.html")){
        window.location.href = "./paginas/IA-generativas.html";
    }
    else{
        window.location.href = "./IA-generativas.html";
    }
})

cultivo.addEventListener('click', ()=>{
    if(document.URL.includes("index.html")){
        window.location.href = "./paginas/cultivos-eficientes.html";
    }
    else{
        window.location.href = "./cultivos-eficientes.html";
    }
})

contato.addEventListener('click', ()=>{
    if(document.URL.includes("index.html")){
        window.location.href = "./paginas/contato.html";
    }
    else{
        window.location.href = "./contato.html";
    }
})