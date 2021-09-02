// 1 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function verificaPalindrome(word){
    for(index in word){
      if(word[index] != word[(word.length - 1) - index]){
        return false;
      }
    }
    return true;
  }
  function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false

console.log("---------------------------");




// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. Array de teste: [2, 3, 6, 7, 10, 1]; . Valor esperado no retorno da função: 4 .
function indiceMaior (array) {
    let indiceMaior = 0;
    for (let index in array) {
        
        if (array[indiceMaior] < array[index]) {
            indiceMaior = index;
            
        }
    }
    console.log(indiceMaior);
}

indiceMaior([0, 1, 2, 113, 444, 10, 1]);


console.log("---------------------------");


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. Array de teste: [2, 4, 6, 7, 10, 0, -3]; .

function indiceMenor (array2) {
    let indiceMenor = 0;
    for (let index2 in array2) {
        
        if (array2[indiceMenor] > array2[index2]) {
            indiceMenor = index2;
            
        }
    }
    console.log(indiceMenor);
}

indiceMenor([100, 1, 2, 113, 444, -10, 105]);

console.log("---------------------------");


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .

function maiorTamanhoDoNome(nomes) {
    let maiorNome = nomes[0];
    for (let indice in nomes) {

        if(maiorNome.length < nomes[indice].length){
            maiorNome = nomes[indice]
        }
    }
    return maiorNome;
}

console.log(maiorTamanhoDoNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));







