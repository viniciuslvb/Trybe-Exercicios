let resultado = "reprovada";

switch (resultado) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada!");
        break;
    
    case "lista":
        console.log("Você foi para a lista de verificação.") 
        break;

    case "reprovada":
        console.log("Você foi reprovado.") 
        break;
    
    default:
        console.log("Valor não identificado") ;
}