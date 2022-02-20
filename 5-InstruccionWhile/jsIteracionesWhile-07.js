/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var numeroIngresado
	var respuesta = "si"

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		respuesta = prompt("Quiere ingresar otro numero?");
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN