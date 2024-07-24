/*ciclos
FOR
estructura: for(inicio, termino, salto){
bloque de instrucciones
}*/

for(var i= 0 ; i < 10 ; i = i + 1 ){
    console.log(`repeticion numero ${i}`)
};

/*WHILE
estructura: while(condicional){
bloque de instrucciones

mientras se cumpla la condicional se hace el bloque de instruccion
}
*/

while(true){
    consola.log(`repitiendo`)
}

/*esto no tiene fin por lo que se repite infinitamente*/

/*identificar si un numero es par o impar, se deben  solicitar numero shasta que ingrese un numero impar*/
var numero = prompt(`ingrese un numero`);
var estado = true;
while(estado == true){
    if (numero % 2 == 1){
       estado = false
    } else {
    numero = prompt(`ingresa un numero`)
    }
}
/*se puede repetir 0 veces, e l var estado = true se hace para que estre al while almenos una vez al igual que se puede ejecutar infinitamente por lo que hay que darle una forma de que en elgun punto no se cumpra y termine*/


/*DO WHILE
estructura: do{
bloque de instrucciones
} while (condicional)
*/ 
/*identificar si un numero es par o impar, se debe solicitar numeros hasta que se ingrese uno impar */
do{
    var numero = prompt(`ingresa un numero`)
    var estado = true
    if(numero == true){
        estado == false
    }
}while(estado == true)

/*el while puede no ejecutarse nunca, el do while siempre se va a ejecutar almenos una vez*/



