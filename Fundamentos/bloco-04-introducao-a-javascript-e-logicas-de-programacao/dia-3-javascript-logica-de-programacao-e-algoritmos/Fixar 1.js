// 1. Pede-se Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

let fruits = [3, 4, 2, 1, 5];

let sum = 0; 

for (let index = 0; index < fruits.length; index += 1) {
    sum += fruits[index];
}

if (sum > 15) {
    console.log(sum);
} else {
    console.log("Valor menor que 16");
}