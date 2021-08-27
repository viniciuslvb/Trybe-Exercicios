// Pede-se: faça uma pirâmide com n asteriscos de base:

let n = 11;
let ast = "*";
let espaco = " ";

let meio = (n + 1) / 2; 
let esquerda = meio;
let direita = meio;

for (let lineIndex = 0; lineIndex <= meio; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
        if (columnIndex > esquerda && columnIndex < direita) {
            espaco = espaco + ast;
        } else {
            espaco = espaco + " ";
        }
    }
    console.log(espaco);
    espaco = " ";
    direita += 1;
    esquerda -= 1
};
