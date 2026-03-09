function LEI_OHM(){
    alert("---Calculadora Lei de OHM---");
    let codigo = parseInt(prompt("\nDigite o valor procurado: \n1.Resistência(r) \n2.Corrente(i) \n3.Tensão(v/u)"));
    
    switch(codigo){
        case 1:
            //r=v/i
            let v = parseFloat(prompt("\nDigite o valor da tensão: "));
            let i = parseFloat(prompt("\nDigite o valor da corrente:"));
            let r = v / i;
            console.log("\nO valor da sua resistência é: ",r," ohms");
            break;
        case 2:
            //v = r * i
            let r2 = parseFloat(prompt("\nDigite o valor da resistência: "));
            let i2 = parseFloat(prompt("\nDigite o valor da corrente:"));
            let v2 = r2 * i2;
            console.log("\nO valor da sua tensão é: ",v2," volts");
            break;
        case 3:
            //i = v / r
            let v3 = parseFloat(prompt("\nDigite o valor da tensão: "));
            let r3 = parseFloat(prompt("\nDigite o valor da resistência: "));
          
            let i3 = v3 / r3;
            console.log("\nO valor da sua corrente é: ",i3," amperes");
            break;
    }
    }