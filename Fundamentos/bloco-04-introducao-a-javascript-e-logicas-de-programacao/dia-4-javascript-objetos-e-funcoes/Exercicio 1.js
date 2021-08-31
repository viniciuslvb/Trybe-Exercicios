let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim"
};

console.log("----------")

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log("Bem-vinda, " + info.personagem);

console.log("----------")

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

console.log(info);

console.log("----------")

// Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
    console.log(key);
}

console.log("----------")

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. 

for (let key in info) {
    console.log(info[key]);
}

console.log("----------")

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Pato Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: "Sim"
};

for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }

