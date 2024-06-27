let vetor = [] // vetor
 let i = 0 // índice do vetor
        // entrada de dados
    while (i < 6) {
        vetor.push(Number(prompt("Informe um número")))
        i++
    }
    // cálculo dos pares e ímpares
    let pares = []
    let impares = []
    i = 0
    while (i < 6) {
        if (vetor[i] % 2 == 0) {
            pares.push(vetor[i]) // insere no vetor par
        } else {
            impares.push(vetor[i]) // insere no vetor ímpar
        }
        i++
    }
    console.log(`Elementos pares ${pares} - Qtde: ${pares.length}`)
    console.log(`Elementos ímpares ${impares} - Qtde: ${impares.length}`)
