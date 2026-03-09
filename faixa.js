function FAIXA(){
    alert("---Calculadora Faixa de resistência---")
    let codigo = parseInt(prompt("\nDigite qual o tipo da sua resistência: \n1.4 faixas \n2.5 faixas"));
    
    let cores = [preto, marrom, vermelho, laranja, amarelo, verde, azul, violeta, cinza, branco, dourado, prata, sem_cor];
    
     "preto" = { cor: 0, mult: 1, tolerancia: 0};
     "marrom" = { cor: 1, mult: 10, tolerancia: 1};
     "vermelho" = { cor: 2, mult: 100, tolerancia: 2};
     "laranja" = { cor: 3, mult: 1000};
     "amarelo" = { cor: 4, mult: 10000};
     "verde" = { cor: 5, mult: 100000, tolerancia: 5};
     "azul" = { cor: 6, mult: 1000000, tolerancia: 6};
     "violeta" = { cor: 7, mult: 10000000, tolerancia: 7};
     "cinza" = { cor: 8, tolerancia: 8};
     "branco" = { cor: 9};
     "dourado" = { mult: 0.1, tolerancia: 5};
     "prata" = { mult: 0.01, tolerancia: 10};
     "sem_cor" = { tolerancia: 20};
    
    
    if(codigo==1){
        let faixa11 = prompt("\nDigite a cor da primeira faixa(sem espaço e em letras minúsculas): ");
        let faixa12 = prompt("\nDigite a cor da segunda faixa(sem espaço e em letras minúsculas): ");
        let faixa13 = prompt("\nDigite a cor do multiplicador(sem espaço e em letras minúsculas): ");
        let faixa14 = prompt("\nDigite a cor da faixa de tolerância(sem espaço e em letras minúsculas): ");
        let resultado = (((cores[faixa11].cor * 10) + cores[faixa12].cor) * cores[faixa13].mult) * ((cores[faixa14].tolerancia + 100) / 100);
        console.log("\nO valor da sua resistência é: ", resultado," ohms.");
    }else if(codigo==2){
        let faixa11 = prompt("\nDigite a cor da primeira faixa(sem espaço e em letras minúsculas): ");
        let faixa12 = prompt("\nDigite a cor da segunda faixa(sem espaço e em letras minúsculas): ");
        let faixa13 = prompt("\nDigite a cor da terceira faixa(sem espaço e em letras minúsculas): ");
        let faixa14 = prompt("\nDigite a cor do multiplicador(sem espaço e em letras minúsculas): ");
        let faixa15 = prompt("\nDigite a cor da faixa de tolerância(sem espaço e em letras minúsculas): ");
        let resultado = (((cores[faixa11].cor * 100) + cores[faixa12].cor * 10 + cores[faixa13].cor) * cores[faixa14].mult) * ((cores[faixa15].tolerancia + 100) / 100);
        console.log("\nO valor da sua resistência é: ", resultado," ohms.");
    } 
    }