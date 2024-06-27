let vetor = [], mult2 = [], mult3 = [], mult2e3 = []

let i = 0
// entrada de dados
while ( i < 7){
    vetor.push(Number(prompt("Informe um núermo")))
    i++
}
// percorre o vetor para encontrar os múltiplos
i = 0
while (i < 7){
    if (vetor[i] % 2 == 0 && vetor[i] % 3 == 0){
        mult2e3.push(vetor[i])
    }
    else if (vetor[i] % 2 == 0){
        mult2.push(vetor[i])
    }
    else if (vetor[i] % 3 == 0){
        mult3.push(vetor[i])
    }
    i++
}
console.log(`Múltiplos de 2 ${mult2} e a qtde ${mult2.length}`)
console.log(`Múltiplos de 3 ${mult3} e a qtde ${mult3.length}`)
console.log(`Múltiplos de 2 e 3 ${mult2e3} e a qtde ${mult2e3.length}`)