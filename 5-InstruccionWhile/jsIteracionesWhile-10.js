/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferencia = 0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		if (numeroIngresado == 0)
		{
			contadorCeros = contadorCeros + 1;
		}
		else if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos = contadorPositivos + 1
			}
			else
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				contadorNegativos = contadorNegativos + 1
			}

		if (numeroIngresado % 2 == 0)
		{
			contadorPares = contadorPares + 1;
		}

		
		respuesta=prompt("desea continuar?");
	}//fin del while

	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es: "+ sumaNegativos + "<br>" + "La suma de positivos es: " + sumaPositivos + "<br>" + "La cantidad de positivos es: " + contadorPositivos + "<br>" + "La cantidad de negativos es: " + contadorNegativos + "<br>" + "La cantidad de ceros es: " + contadorCeros + "<br>" + "La cantidad de numeros pares es: " + contadorPares + "<br>" + "El promedio de los positivos es" + promedioPositivos + "<br>" + "El promedio de los negativos es: " + promedioNegativos + "<br>" + "La diferencia entre positivos y negativos es: " + diferencia + "<br>");
}//FIN DE LA FUNCIÓN