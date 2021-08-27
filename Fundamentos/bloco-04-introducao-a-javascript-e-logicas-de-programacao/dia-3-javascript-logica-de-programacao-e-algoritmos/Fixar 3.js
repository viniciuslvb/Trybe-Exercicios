// Considerando a array, pede-se: 

// 3. Soma todos os valores contidos na Array e imprima o resultado: 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log("A soma de todos os números é: " + soma);
