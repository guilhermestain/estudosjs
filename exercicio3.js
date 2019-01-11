function notaMaster (prova1, prova2){
    if (((prova1+prova2)/2)>=5){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}
console.log(notaMaster(4,5))