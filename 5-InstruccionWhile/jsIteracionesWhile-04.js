/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));

	while( isNaN(numeroIngresado) || (numeroIngresado < 0 || numeroIngresado > 9))
	{
		numeroIngresado = prompt("Error, reingrese el numero entre 0 y 9");
		numeroIngresado = parseInt(numeroIngresado);
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN