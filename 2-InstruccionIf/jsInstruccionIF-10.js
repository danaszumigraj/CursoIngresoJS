function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
	var maximo = 10;
	var minimo = 1; 

	numero = Math.round(Math.random () * (maximo - minimo) + minimo);

	if (numero>=9)
	{
		alert("La nota es " + numero + " .EXCELENTE")
	}
	else
	{
		if (numero > 4)
		{
			alert("La nota es " + numero + " .APROBÓ")
		}
		else
		{
			alert("La nota es " + numero + " .Vamos, la proxima se puede")
		}
	}

}//FIN DE LA FUNCIÓN