const botaoAgricultura = document.querySelector("#sustentabilidade");
const botaoIA = document.querySelector("#IA");
const botaoCultivo = document.querySelector("#cultivo");

botaoAgricultura.addEventListener('click', ()=>{
    window.location.href = "./paginas/agro-sustentavel.html";
})

botaoIA.addEventListener('click', ()=>{
    window.location.href = "./paginas/IA-generativas.html";
})

botaoCultivo.addEventListener('click', ()=>{
    window.location.href = "./paginas/cultivos-eficientes.html";
})