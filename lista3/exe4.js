function exe4(){
    let numero = Number(prompt(`Informe o número`))
    for(let conta = 0; conta <= 10; conta++){
        console.log(`${numero} * ${conta} = ${numero*conta}`)
    }
}

function exe5(){
    for(let numero=1; numero<=10;numero++){
        console.log(`Tabuada do ${numero}`)
        for(let conta = 0; conta <= 10; conta++){
            console.log(`${numero} * ${conta} = ${numero*conta}`)
        }
    }
}