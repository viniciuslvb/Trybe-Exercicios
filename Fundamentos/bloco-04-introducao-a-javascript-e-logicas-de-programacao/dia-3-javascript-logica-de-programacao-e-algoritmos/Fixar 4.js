// Considerando a array, pede-se: 

// 4. Calcule e imprima a média aritmética dos valores contidos no array:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}

let mediaArit = soma / numbers.length;

console.log("A média artimética de todos os números é: " + mediaArit);

