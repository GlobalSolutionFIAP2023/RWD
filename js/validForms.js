function verifMin(inputNull){
    if (inputNull == 0){
        alert("Campo Nulo!");
    }
    else if(inputNull < 5){
        alert("Conteúdo menor que 5 caracteres!");
    }
}

function verifEmail(valor){
    if(valor.length > 4){
        if(valor.includes("@")){
        }
        else{
            alert("email invalido");
        }
    }
}

function verifData(){
    
    if(dataNascimento.value.length != 0){
        let data = new Date(dataNascimento.value);
        let dataAtual = new Date();

        if(data > dataAtual){
            alert("Data de nascimento invalida!");
        }
    }
    else if(dataNascimento.value.length == 0){
        alert("Data de nascimento não preenchida!");
    }
}

// Variável que recebe inputs do formulario, armazenandno em um array
// const SomeInputs = document.querySelectorAll("input");
// // for para percorrer o array de inputs
// for (let i = 0; i < 9; i++){
//     SomeInputs[i].addEventListener('blur', (evento)=>{
//         //Se o target.id == idNome, idSobrenome, idEmail, idTelefone, idEndereco, idAssunto
//         if(evento.target.id == "idNome" || 
//             evento.target.id == "idSobrenome" || 
//             evento.target.id == "idEmail" || 
//             evento.target.id == "idTelefone" || 
//             evento.target.id == "idEndereco" || 
//             evento.target.id == "idAssunto"){
                
//             verifMin(SomeInputs[i].value.length); //executa a função verifMin passando o tamanho do valor do input como parametro
//         }

//         //Se o target.id == idEmail
//         if(evento.target.id == "idEmail"){
//             verifEmail(SomeInputs[i].value); //executa a função verifEmail passando o valor do input como parametro
//         }
//     });
// }

const nome = document.querySelector("#idNome");
nome.addEventListener("blur", (evento)=>{
    verifMin(nome.value.length)
})

const sobrenome = document.querySelector("#idSobrenome");
sobrenome.addEventListener("blur", (evento)=>{
    verifMin(sobrenome.value.length)
})

const email = document.querySelector("#idEmail");
email.addEventListener("blur", (evento)=>{
    verifEmail(email.value)
})

const genero = document.querySelector("#idSelect");
genero.addEventListener("blur", (evento)=>{
    if(genero.value == "Selecione"){
        alert("Selecione um gênero!");
    }
})

const telefone = document.querySelector("#idTelefone");
telefone.addEventListener("blur", (evento)=>{
    verifMin(telefone.value.length)
})

const endereco = document.querySelector("#idEndereco");
endereco.addEventListener("blur", (evento)=>{
    verifMin(endereco.value.length)
})

const assunto = document.querySelector("#idAssunto");
assunto.addEventListener("blur", (evento)=>{
    verifMin(assunto.value.length)
})

const dataNascimento = document.querySelector("#idDataNasc");
dataNascimento.setAttribute("max", "2020-12-31");
dataNascimento.setAttribute("min", "1900-01-01");
dataNascimento.addEventListener("blur", (evento)=>{
    verifData();
})

const mensagem = document.querySelector("#idMensagem");
mensagem.addEventListener("blur", (evento)=>{
    if(mensagem.value.length != 0){
        if(mensagem.value.length > 5){

        }
        else{
            alert("Mensagem com menos de 5 caracteres!");
        }
    }
    else{
        alert("Mensagem não preenchida!");
    }
})




function imgURL(){
    const file = document.querySelector("#inputImg");
    const fr = new FileReader();
    const img = document.querySelector("#previewFoto");

    fr.readAsDataURL(file.files[0]);
    fr.addEventListener('load', ()=>{
        const url = fr.result;
        img.src = url;
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
