function converterPeso(peso){
    const pesoFormato = peso.split("")

    if(pesoFormato.length == 1){
        return peso
    }else{
        pesoFormato.splice(pesoFormato.length - 1, 0 , '.')
        return pesoFormato.join("")
    } 
}
function converterAltura(altura){
    const alturaFormato = altura.split("")

    if(alturaFormato.length == 1){
        alturaFormato.unshift("0.")
        return alturaFormato.join("")
    }else {
        alturaFormato.splice(alturaFormato.length -1, 0 , '.')
        return alturaFormato.join("")
    }
}

export {converterPeso, converterAltura}