function MULTeSUB(){
alert("---Calculadora Multiplos e Submultiplos---")
let tipo = prompt("\nEscreva a unidade base : \n-Ampere\n-Ohm\n-Watt\n-Volt");
let valor = Number(prompt("\nDigite o valor: "));
let resultado = valor * 1000
console.log("\nSeu valor em mili é: ",resultado,"\nunidade:",tipo)
}