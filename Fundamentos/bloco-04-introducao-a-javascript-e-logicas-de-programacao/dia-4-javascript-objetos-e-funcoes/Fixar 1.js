//Pede-se: Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
 

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: "2",
        silver: "3",
    }
}

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");

// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player["fullName"] = player.name + " " + player.lastName;

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora " + player.fullName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.")

// Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata");
  

