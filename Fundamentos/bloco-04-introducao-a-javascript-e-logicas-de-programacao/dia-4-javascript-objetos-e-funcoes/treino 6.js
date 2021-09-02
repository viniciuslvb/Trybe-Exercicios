let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

console.log("----------------------------")

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
}

console.log("----------------------------")

// Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let index in names) {
      console.log("Olá " + names[index]);
    }

console.log("----------------------------")

// Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

  for (let key in carro) {
      console.log(key, carro[key]);
  }

console.log("----------------------------")


  

