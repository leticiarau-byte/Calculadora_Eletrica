alert("---Calculadora---\n\nSeja bem-vindo a calculadora, escolha o tipo da sua operação:\n")
let codigo = parseInt(prompt("\n1-Consumo\n2-Submultiplos e Multiplos"))

switch(codigo){
    case 1:
        CONSUMO();
        break;
    case 2:
        MULTeSUB();   
        break;
}
