/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var numeroIngresado;
	//var respuesta = "si";

	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		respuesta = prompt("Quiere ingresar otro numero?");

		while (respuesta != "si" && respuesta != "no")
		{
			prompt("Error, quiere ingresar otro numero? (si o no)");
		}
	}while(respuesta == "si")

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN