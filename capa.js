alert("---Calculadora---\n\nSeja bem-vindo a calculadora, escolha o tipo da sua operação:\n")
let codigo = parseInt(prompt("\n1-Consumo\n2-Submultiplos e Multiplos \n3-Faixa de Resistência\n4-Lei de Ohm"));

switch(codigo){
    case 1:
        CONSUMO();
        break;
    case 2:
        MULTeSUB();   
        break;
    case 3:
        FAIXA();
        break;
    case 4:
        LEI_OHM();
        break;
}