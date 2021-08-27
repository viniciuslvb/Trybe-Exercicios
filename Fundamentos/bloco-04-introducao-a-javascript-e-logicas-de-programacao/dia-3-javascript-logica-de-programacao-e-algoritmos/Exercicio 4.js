// Pede-se faça uma pirâmide com n asteriscos de base:

let n = 5;
let espaço = n - 1;
let asterisco = 1;
 
for (let index = 1; index <= 2*n; index++) {
    for (secondIndex = 1; secondIndex <= espaço; secondIndex++) {
        console.log(".");
    }
    for (secondIndex = 1; espaço <= asterisco; secondIndex++){
        console.log("*");
    }
}
