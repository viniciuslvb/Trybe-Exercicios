// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

console.log("------------------------------------");

// Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for ( let elemNames of names) {
    console.log(elemNames);
}

console.log("------------------------------------");

// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

let fruits = [3, 4, 10, 1, 12];
let sum = 0; 

for (let index = 0; index < fruits.length; index += 1) {
    sum += fruits[index];
}

if (sum > 15) {
    console.log(sum);
} else {
    console.log("Valor menor que 16")
}

