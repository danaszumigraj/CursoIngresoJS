/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador = 0;
	var respuesta;
	var sumaPositivos = 0;
	var multiplicacionNegativos = 1;
	//respuesta="si";

	do
	{
		contador = parseInt(prompt("Ingrese un numero"));
		if(contador >= 0)
		{
			sumaPositivos = contador + sumaPositivos;
		}
		else
		{
			multiplicacionNegativos = contador * multiplicacionNegativos;
		}

		respuesta = prompt("Quiere ingresar otro numero?");
			

	}while(respuesta == "si")

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN