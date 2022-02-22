/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el resultado
"la suma es xxx y supero el 10".*/

function mostrar()
{
    var numeroUno = (prompt("Ingrese un numero"));
    var numeroDos = (prompt("Ingrese otro numero"));
    var resultado;
    var mensaje;

    while(isNaN(numeroUno) == true || isNaN(numeroDos == true))
    {
        numeroUno = parseInt(prompt("Error, ingrese un numero"));
    }

    if (numeroUno = numeroDos)
    {
        resultado = numeroUno + numeroDos;
        mensaje = "El resultado es " + resultado;
    }
    
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    if (numeroUno > numeroDos)
    {
        resultado = numeroUno - numeroDos;
        mensaje = "La resta es " + resultado;
    }
    else if(numeroDos > numeroUno)
        {
            resultado = numeroUno + numeroDos
            mensaje = "La suma es " + resultado;
            
            if (resultado > 10)
            {
                mensaje = mensaje + " y supero el 10"
            }
        }

    alert(mensaje);
        
    

}
