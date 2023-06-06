function verifMin(inputNull){
    if (inputNull == 0){
        return "Campo Nulo!"
    }
    else if(inputNull < 5){
        return "Conteúdo menor que 5 caracteres!"
    }
}

function verifEmail(valor){
    if(valor.length > 4){
        if(valor.includes("@")){
            if(valor.includes(".")){
                return "Email válido!"
            }
            else{
                return "email invalido"
            }
        }
        else{
            return "email invalido"
        }
    }
    else{
        return "email invalido"
    }
}

function verifData(){
    if(dataNascimento.value.length != 0){
        let data = new Date(dataNascimento.value);
        let dataAtual = new Date();

        if(data > dataAtual){
            return "Data de nascimento invalida!"
        }
    }
    else if(dataNascimento.value.length == 0){
        return "Data de nascimento não preenchida!"
    }
}


const nome = document.querySelector("#idNome");
const spanNome = document.querySelector("#spanNome");
nome.addEventListener("blur", (evento)=>{
    let retorno = verifMin(nome.value.length);
    spanNome.innerText = retorno;
    if(retorno != "Campo Nulo!" && retorno != "Conteúdo menor que 5 caracteres!"){
        spanNome.style.visibility = "hidden";
    }
    else{
        spanTelefone.style.visibility = "visible";
    }
})

const sobrenome = document.querySelector("#idSobrenome");
const spanSobrenome = document.querySelector("#spanSobrenome");
sobrenome.addEventListener("blur", (evento)=>{
    retorno = verifMin(sobrenome.value.length);
    spanSobrenome.innerText = retorno;
    if(retorno != "Campo Nulo!" && retorno != "Conteúdo menor que 5 caracteres!"){
        spanSobrenome.style.visibility = "hidden";
    }
    else{
        spanTelefone.style.visibility = "visible";
    }
})

const email = document.querySelector("#idEmail");
const spanEmail = document.querySelector("#spanEmail");
email.addEventListener("blur", (evento)=>{
    retorno = verifEmail(email.value)
    spanEmail.innerText = retorno;
    if(retorno != "email invalido"){
        spanEmail.style.visibility = "hidden";
    }
    else{
        spanTelefone.style.visibility = "visible";
    }
})

const genero = document.querySelector("#idSelect");
genero.addEventListener("blur", (evento)=>{
    if(genero.value == "Selecione"){
        alert("Selecione um gênero!");
    }
})

const telefone = document.querySelector("#idTelefone");
const spanTelefone = document.querySelector("#spanTelefone");
telefone.addEventListener("blur", (evento)=>{
    retorno = verifMin(telefone.value.length)
    spanTelefone.innerText = retorno;
    if(retorno != "Campo Nulo!" && retorno != "Conteúdo menor que 5 caracteres!"){
        spanTelefone.style.visibility = "hidden";
    }
    else{
        spanTelefone.style.visibility = "visible";
    }
})

function mascaraTelefone(parametro){
    let valorTelefone = parametro.value;

    if(valorTelefone.length > 1){
        ddd = valorTelefone.slice(0,2);
        
        if(valorTelefone.length > 2){
            cel = valorTelefone.slice(2,3);

            if(valorTelefone.length > 6){
                numPart1 = valorTelefone.slice(3,7);

                if(valorTelefone.length > 9){
                    numPart2 = valorTelefone.slice(7,11);
                    
                    telefoneAjustado = "(" + ddd + ") " + cel + " " + numPart1 + "-" + numPart2;
                    telefone.value = telefoneAjustado;
                }
            }
        }
    }
}






const endereco = document.querySelector("#idEndereco");
const spanEndereco = document.querySelector("#spanEndereco");
endereco.addEventListener("blur", (evento)=>{
    retorno = verifMin(endereco.value.length)
    spanEndereco.innerText = retorno;
    if(retorno != "Campo Nulo!" && retorno != "Conteúdo menor que 5 caracteres!"){
        spanEndereco.style.visibility = "hidden";
    }
    else{
        spanEndereco.style.visibility = "visible";
    }
})

const assunto = document.querySelector("#idAssunto");
const spanAssunto = document.querySelector("#spanAssunto");
assunto.addEventListener("blur", (evento)=>{
    retorno = verifMin(assunto.value.length)
    spanAssunto.innerText = retorno;
    if(retorno != "Campo Nulo!" && retorno != "Conteúdo menor que 5 caracteres!"){
        spanAssunto.style.visibility = "hidden";
    }
    else{
        spanAssunto.style.visibility = "visible";
    }
})

const dataNascimento = document.querySelector("#idDataNasc");
dataNascimento.setAttribute("max", "2020-12-31");
dataNascimento.setAttribute("min", "1900-01-01");
const spanDataNasc = document.querySelector("#spanDataNasc");
dataNascimento.addEventListener("blur", (evento)=>{
    retorno = verifData();
    spanDataNasc.innerText = retorno;
    if(retorno != "Data de nascimento invalida!" && retorno != "Data de nascimento não preenchida!"){
        spanDataNasc.style.visibility = "hidden";
    }
    else{
        spanDataNasc.style.visibility = "visible";
    }
})

const mensagem = document.querySelector("#idMensagem");
const spanMensagem = document.querySelector("#spanMensagem");
mensagem.addEventListener("blur", (evento)=>{
    if(mensagem.value.length != 0){
        if(mensagem.value.length > 5){
            spanMensagem.style.visibility = "hidden";
        }
        else{
            var variavel = "Mensagem com menos de 5 caracteres!";
            spanMensagem.innerText = variavel;
            if(retorno != "Campo Nulo!" && retorno != "Conteúdo menor que 5 caracteres!"){
                spanMensagem.style.visibility = "hidden";
            }
            else{
                spanMensagem.style.visibility = "visible";
            }
        }
    }
    else{
        var variavel = "Mensagem não preenchida!";
        spanMensagem.innerText = variavel;
        if(retorno != "Campo Nulo!" && retorno != "Conteúdo menor que 5 caracteres!"){
            spanMensagem.style.visibility = "hidden";
        }
        else{
            spanMensagem.style.visibility = "visible";
        }
    }
})




function imgURL(){
    const file = document.querySelector("#inputImg");
    const fr = new FileReader();
    const img = document.querySelector("#previewFoto");
    const botaoEnviar = document.querySelector("#btnEnviar");
    const fieldset = document.querySelector("fieldset");

    fr.readAsDataURL(file.files[0]);
    fr.addEventListener('load', ()=>{
        const url = fr.result;
        img.src = url;
        img.alt = "Preview da imagem";
        img.setAttribute("style", "display: block;");
        botaoEnviar.setAttribute("style", "margin-top: 55px;");
        
        localStorage.setItem("img", url);
    });
}


//INSERIR NO LOCAL STORAGE
function setItemLocalStorage(){
    contatoForms = [
        {
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            telefone: telefone.value,
            genero: genero.value,
            endereco: endereco.value,
            assunto: assunto.value,
            mensagem: mensagem.value,
            dataNascimento: dataNascimento.value
        }
    ];
    localStorage.setItem("contatoForms", JSON.stringify(contatoForms));
}

formulario = JSON.parse(localStorage.getItem("contatoForms"));
imgFormulario = JSON.stringify(localStorage.getItem("img"));
