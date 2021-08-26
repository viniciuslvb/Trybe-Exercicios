const currentHour = 15;

let message = "";

if (currentHour >= 22) {
    let message = "Não deveriámos comer nada, é hora de dormir";
    console.log(message);
} else if (currentHour >= 18 && currentHour < 22) {
    let message = "Rango da noite, vamos jantar :D";
    console.log(message);
} else if (currentHour >= 14 && currentHour < 18) {
    let message = "Vamos fazer um bolo pro café da tarde?";
    console.log(message);
} else if (currentHour > 11 && currentHour < 14) {
    let message = "Hora do almoço!!!";
    console.log(message);
} else {
    let message = "Hmmm, cheiro de café recém passado";
    console.log(message);
}



