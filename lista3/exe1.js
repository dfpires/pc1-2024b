function exe1(){
    let conta2 = 1
    while (conta2 <= 5){
        let a = Number(prompt("Informe valor de A"))
        let b = Number(prompt("Informe valor de B"))
        let c = Number(prompt("Informe valor de C"))
        let d = Number(prompt("Informe valor de D"))
        let conta = 1
        let aux
        while (conta <= 3){
            if (a > b){  // troca a com b
                aux = a; a = b; b = aux
            }
            if (b > c){ // troca b com c
                aux = b; b = c; c = aux;
            }
            if (c > d){
                aux = c; c = d; d = aux;
            }
            conta++ // conta = conta + 1
        }
        console.log(`Ordem crescente ${a} - ${b} - ${c} - ${d}`)
        conta2++
    }
}
function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro
    let maiorLucro = 0
    while (preco >= 1.0){
        lucro = (preco * qtde) - despesa
        if (lucro > maiorLucro){
            maiorLucro = lucro
        }
        console.log(`Preço: ${preco} - Qtde: ${qtde} = Lucro ${lucro}`)
        qtde = qtde + 26
        preco = preco - 0.50
    }
    console.log(`Maior lucro ${maiorLucro}`)
}