let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Considerando a array acima, pede-se: 

// 1. Percorra o array imprimindo todos os valores nele contidos com o console.log():

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// 2. Soma todos os valores contidos na Array e imprima o resultado: 

let soma = 0

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log("A soma de todos os números é: " + soma);

// 3. Calcule e imprima a média aritmética dos valores contidos no array: 

let mediaArit = soma / numbers.length;

console.log("A média artimética de todos os números é: " + mediaArit);

// 4. Pede-se: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaArit > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorValor) {
        maiorValor = numbers[i]
    }
}

console.log("O maior valor do array é: " + maiorValor);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


// falta terminar

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
