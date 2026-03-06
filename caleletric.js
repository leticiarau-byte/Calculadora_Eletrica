
alert("---Calculadora Eletrônica---")
let objeto = prompt("\nMe escreva seu objeto: ");
let valor
let KW 
let codigo = parseInt(prompt("\nSeu valor está em: \n1. valor em watt(potência) \n2.Valor em kW "));
KW = Number(prompt("\nDigite o valor "));
let horas = Number(prompt("\nDigite o tempo diário de uso(em horas): "));
if(codigo==1){
    KW = (KW) / 1000;
}
KW = KW * horas * 30;
valor = KW * 0.9;
console.log("\nSeu valores são: \nNome do objeto: ",objeto,"\nO valor pro mês: R$",valor.toFixed(2),"\nO valor em KWH: ",KW);

