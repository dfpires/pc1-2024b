function exe10(){
    let somaPrimo = 0
    let somaPares = 0
    for(let conta = 1; conta <= 10; conta++){
        let numero = Number(prompt(`Informe um número`))
        let primo = true // é primo
        for(let divisor=2; divisor <= numero - 1; divisor++ ){
            if (numero % divisor == 0){ // verifica se a divisão dá resto zero
                primo = false // não é primo
            }
        }
        if (primo && numero != 0 && numero != 1){
            console.log(`O número ${numero} é primo`)
            somaPrimo = somaPrimo + numero
        }
        else {
            console.log(`O número ${numero} não é primo`)
        }
        if (numero % 2 == 0){
            console.log(`O número ${numero} é par`)
            somaPares = somaPares + numero
        }
    }
    console.log(`A soma dos primos é ${somaPrimo}`)
    console.log(`A soma dos pares é ${somaPares}`)
}
