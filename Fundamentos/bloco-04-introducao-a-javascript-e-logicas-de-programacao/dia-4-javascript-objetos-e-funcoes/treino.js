let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);

let searchForFirstTask = tasksList[0];

console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length -1];

console.log(searchForLastTask);

tasksList.push("Fazer Exercícios Trybe");

console.log(tasksList);

tasksList.unshift("Acordar");

console.log(tasksList);

tasksList.pop();

console.log(tasksList);

let indexOfTask = tasksList.indexOf("Reunião");

console.log(indexOfTask);


