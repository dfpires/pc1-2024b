function prova(){
    let modelo = document.getElementById("modelo").value
    let ano = Number(document.getElementById("ano").value)
    let nota = Number(document.getElementById("nota").value)
    let preco
    if (modelo != "LT" || modelo != "LTZ" || modelo != "Premium" || ano < 0 || nota < 0 || nota > 10){
        console.log('Valores inválidos')
    }
    else {
        switch(modelo){
            case "LT": preco = 82000; break
            case "LTZ": preco = 88000; break
            case "Premium": preco = 94000; break
        }
        console.log(preco)
        let desconto
        if (ano == 2024){
            desconto = 0
        }
        else if (ano == 2023 || ano == 2022){
            desconto = preco*10/100
        }
        else if (ano == 2021 || ano == 2020){
            desconto = preco * 20/100
        }
        else if (ano < 2020){
            desconto = preco * 30/100
        }
        let precoDesconto = preco - desconto
        console.log(precoDesconto)
        let acrescimo
        if (nota <= 5){
            acrescimo = 0
        }
        else if (nota <= 7 ){
            acrescimo = precoDesconto*5/100
        }
        else if (nota <= 9){
            acrescimo = precoDesconto*10/100
        }
        else {
            acrescimo = precoDesconto * 15/100
        }
        let precoFinal = precoDesconto + acrescimo
        console.log(precoFinal)
    }

    
}
