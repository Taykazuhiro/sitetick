document.getElementById("bt-enviar").addEventListener("click",validacep)
var cep = document.getElementById("CEP");

function validacep() {
    if (cep.value != "" && cep.value == "01136000"){
        alert("Oba! Local atendido!")
    }else if (cep.value == ""){
        alert("Por favor, preencha o CEP para consulta")
    } else {
        alert("Desculpe, sem atendimento neste local :(")
    }
}