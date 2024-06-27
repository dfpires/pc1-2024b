function exe20(){
    let opcao, n1, n2, n3, p1, p2, p3
    do{
        opcao = Number(prompt(`Menu de opções \n 1. Média aritmética \n 2. Média Ponderada \n 3. Sair`))
        switch(opcao){
            case 1: do {
                        n1 = Number(prompt(`Informe uma nota`))
                    }
                    while (n1 < 0 && n1 > 10)
                    do {
                        n2 = Number(prompt(`Informe uma nota`))
                    }
                    while (n2 < 0 && n2 > 10)
                    alert(`A média aritmética é ${(n1 + n2) / 2}`)
                    break
            case 2: n1 = Number(prompt(`Informe n1`))
                    p1 = Number(prompt(`Informe peso de n1`))
                    n2 = Number(prompt(`Informe n2`))
                    p2 = Number(prompt(`Informe peso de n2`))
                    n3 = Number(prompt(`Informe n3`))
                    p3 = Number(prompt(`Informe peso de n3`))
            let mp = ((n1*p1) + (n2*p2) + (n3*p3)) / (p1 + p2 + p3)
                    alert(`A média ponderada é ${mp}`)
                    break
            case 3: alert('Programa será encerrado'); break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 3)
}