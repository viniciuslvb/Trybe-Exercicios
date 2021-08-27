// Pede-se Faça um programa que diz se um número definido numa variável é primo ou não. Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

let divisor = 1;
let n = 57;

for (let number = 2; number <= n; number += 1) {
    if (n % number === 0) divisor += 1;
}

if (divisor === 2) console.log(n + " é primo"); 
else console.log(n + " não é primo");
