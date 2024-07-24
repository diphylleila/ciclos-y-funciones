let numero = prompt(`Ingrese su número`)
let factor
if (numero <= 20 && numero >= 1) {

    for (i = 1; i < numero; i = i + 1) {
        factor = i
        console.log(factor + ` * ` + numero + ` = ` + factor * numero
        )
    }




} else {
    console.log(`numero fuera de rango`)
}


