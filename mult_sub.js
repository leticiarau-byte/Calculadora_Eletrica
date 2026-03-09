function MULTeSUB(){
    alert("---Calculadora Multiplos e Submultiplos---")
    let un = prompt("\nEscreva a unidade base : \n-Ampere\n-Ohm\n-Watt\n-Volt");
    let esta = parseInt(prompt("\nDigite a unidade base: \n0-Giga(G)\n1-Mega(M)\n2-Kilo(k)\n3-Base\n4-Mili(m)\n5-Micro(µ)\n6-Nano(n)"));
    let chegar = parseInt(prompt("\nEscreva a unidade onde deseja converter: \n0-Giga(G)\n1-Mega(M)\n2-Kilo(k)\n3-Base\n4-Mili(m)\n5-Micro(µ)\n6-Nano(n)"));
    let valor = Number(prompt("\nDigite o valor: "));
    let potencia = [10**9, 10**6, 10**3, 10**0, 10**-3, 10**-6, 10**-9]
    
    let resultado = valor * (potencia[esta] / potencia[chegar]);
    console.log("\nSeu valor é de: ",resultado," ",un);
    
    }