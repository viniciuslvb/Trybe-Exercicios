// Pede-se Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 

let n = 5;
let ast = "*";
let espaco = " ";

for (let index = 0; index <= n; index +=1) {
    console.log(espaco);
    espaco = espaco + ast;
}
