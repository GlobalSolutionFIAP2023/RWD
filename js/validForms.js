const SomeInputs = document.querySelectorAll("input");

for (let i = 0; i < 9; i++){
    SomeInputs[i].addEventListener('blur', (evento)=>{
        
        if(evento.target.id == "idNome" || 
            evento.target.id == "idSobrenome" || 
            evento.target.id == "idEmail" || 
            evento.target.id == "idTelefone" || 
            evento.target.id == "idEndereco" || 
            evento.target.id == "idAssunto"){
                
            verifMin(SomeInputs[i].value.length);
        }

        if(evento.target.id == "idEmail"){
            verifEmail(SomeInputs[i].value);
        }
    });
}

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
            alert("Email valido");
        }
        else{
            alert("email invalido");
        }
    }
}

dataNascimento = document.querySelector("#idDataNasc");
dataNascimento.addEventListener("blur", ()=>{
    if(dataNascimento.value == ""){
        alert("Preencha a data de nascimento!");
    }
})