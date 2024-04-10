function exe1_2(){
    // recupera o que usuário digitou
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    // calcula média
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    // calcula mensagem
    let resultado
    if (media >= 0 && media < 3){
        resultado = `A média do aluno é ${media} e foi reprovado`
    }
    else if (media >= 3 && media < 7){
        resultado = `A média do aluno é ${media} e ficou de exame`
    }
    else if (media >= 7 && media <= 10){
        resultado = `A média do aluno é ${media} e foi aprovado`
    }
    // exibe o resultado para o usuário
    document.getElementById("resultado").textContent = resultado
}

function exe5(){
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let escolha = Number(document.getElementById("escolha").value)
    let resultado
    switch(escolha){
        case 1: resultado = `A média é  ${(numero1 + numero2) / 2}`
                break
        case 2: if (numero1 >= numero2){
                    resultado = `A diferença é ${numero1 - numero2}`
                }
                else {
                    resultado = `A diferença é ${numero2 - numero1}`
                }
                break
        case 3: resultado = `O produto é ${numero1 * numero2}`
                break
        case 4: if (numero2 != 0){
                    resultado = `A divisão é ${numero1 / numero2}`
                }
                else {
                    resultado = "Impossível dividir por zero"
                }
                break
        default: resultado = "Opção inválida"
    }
    document.getElementById("resultado").textContent = resultado
}

function exe22(){
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let risco
    if (idade < 0 || peso <= 0){
        risco = "Impossível calcular risco"
    }
    else if (idade < 20) {
        if (peso < 60){
            risco = 9
        }
        else if (peso >= 60 && peso <= 90){
            risco = 8
        }
        else { // peso > 90
            risco = 7
        }
    }
    else if (idade >= 20 && idade <= 50){
        if (peso < 60){
            risco = 6
        }
        else if (peso >= 60 && peso <= 90){
            risco = 5
        }
        else { // peso > 90
            risco = 4
        }
    }
    else { // idade > 50
        if (peso < 60){
            risco = 3
        }
        else if (peso >= 60 && peso <= 90){
            risco = 2
        }
        else { // peso > 90
            risco = 1
        }
    }
    document.getElementById("resultado").innerHTML =
                        risco
}

function exe23(){
    let codigo = Number(document.getElementById("codigo").value)
    let qtde = Number(document.getElementById("qtde").value)
    let resultado
    let precoUnitario
    let precoTotal
    let desconto
    let precoFinal
    if (codigo < 1 || codigo > 40 || qtde < 0){
        resultado = "Código e/ou qtde inválidos"
    }
    else {
        // cálculo do preço unitário
        if (codigo >=1 && codigo <=10){
            precoUnitario = 10
        }
        else if (codigo >= 11 && codigo <= 20){
            precoUnitario = 15
        }
        else if (codigo >= 21 && codigo <= 30){
            precoUnitario = 20
        }
        else { // codigo entre 31 e 40
            precoUnitario = 30
        }
        // cálculo do preço final
        precoTotal = precoUnitario * qtde
        // cálculo do desconto
        if (precoTotal < 250){
            desconto = precoTotal * 5.0 / 100
        }
        else if (precoTotal >= 250 && precoTotal <= 500){
            desconto = precoTotal * 10.0 / 100
        }
        else { // precoTotal > 500
            desconto = precoTotal * 15.0 / 100
        }
        // cálculo do preço Final
        precoFinal = precoTotal - desconto
        // atribui valor para resultado
        resultado = `Preço Unitário ${precoUnitario} <br/> Preço Total ${precoTotal} <br/> Desconto ${desconto} </br> Preço Final ${precoFinal}`
    }
    // mostra resultado para usuário
    document.getElementById("resultado").innerHTML = resultado
}

