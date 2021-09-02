function printGreeting(name) {
    console.log("Olá, " + name);
}

printGreeting("Vinicius");

function makeGreeting(name) {
    return "E ai " + name + "? Tudo bem com você ?";
}

let greeting = makeGreeting("Vinicius");
console.log(greeting);
