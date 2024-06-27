function exe3(){
    let idade
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    for(let conta=1;conta<=8;conta++){
        idade = Number(prompt(`Informe idade ${conta}`))
        if (idade < 0){
            console.log(`Idade é inválida`)
        }
        else if (idade <= 15){
            f1++
        }
        else if (idade <= 30){
            f2++
        }
        else if (idade <= 45){
            f3++
        }
        else if (idade <= 60){
            f4++
        }
        else {
            f5++
        }
    }// fecha o FOR
    console.log(`F1: ${f1} F2: ${f2} F3: ${f3} F4: ${f4} F5 ${f5}`)
    console.log(`% F1: ${f1/8*100} F5: ${f5/8*100}`)
}
