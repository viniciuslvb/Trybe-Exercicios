// Pede-se Agora inverta o lado do triângulo.

let n = 5;
let ast = "*";
let espaco = " ";
let posEspaco = n; 

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
        if (columnIndex < posEspaco) {
            espaco = espaco + " ";
        } else {
            espaco = espaco + ast;
        }
    }
    console.log(espaco);
    espaco = " ";
    posEspaco -= 1;
}