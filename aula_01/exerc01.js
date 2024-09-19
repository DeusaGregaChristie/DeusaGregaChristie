let hrsBr, hrsfran

hrsBr = parseInt(prompt(`Que horas são no Brasil que eu te digo que horas são na França`));
hrsfran = hrsBr + 5;

if (hrsfran >= 24) {
    hrsBr -=24;
    document.write(`A hora aqui é: ${hrsBr.toFixed(2)} e na França é: ${hrsfran.toFixed(2)}`)
} else{
    document.write(`A hora aqui é: ${hrsBr.toFixed(2)} e na França é: ${hrsfran.toFixed(2)}`)
}


