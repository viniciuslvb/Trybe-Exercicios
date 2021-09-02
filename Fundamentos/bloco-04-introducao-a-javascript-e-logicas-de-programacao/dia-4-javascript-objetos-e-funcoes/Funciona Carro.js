let statusCarro = "desligado";
let aceleracao = 0; 
let rotacaoDoVolante = 0;

function ligarDesligar () {
    if (statusCarro === "desligado") {
        statusCarro = "ligado";
    } else {
        statusCarro = "desligado";
    }

    return statusCarro;
}
    
function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

    return "Acelerando a " + aceleracao + "m/s2";

}

function frear(descremento) {
    aceleracao = aceleracao - descremento;

    return "Desacelerando para " + aceleracao + "m/s2";
}

function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + "graus";
}


// Para testar copiar e colar o código no console de navegador e invocar as funções.

// Link no Course: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes/5901c768-9dee-46e8-b23f-c03e76c5b8b3/conteudos/e9ba5b0a-554b-41f5-a982-df938d1e3d24/funcoes/e1d3c776-e914-4607-a75b-6ad0df21bf55?use_case=next_button 


