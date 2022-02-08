function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.random();
	var enteroAleatorio;
	

	enteroAleatorio = Math.floor(aleatorio * (10 - 1 + 1) + 1);

	if (enteroAleatorio>=9)
	{
		alert("La nota es " + enteroAleatorio + ". EXCELENTE")
	}
	else
	{
		if (enteroAleatorio > 4)
		{
			alert("La nota es " + enteroAleatorio + ". APROBÓ")
		}
		else
		{
			alert("La nota es " + enteroAleatorio + ". Vamos, la proxima se puede")
		}
	}

}//FIN DE LA FUNCIÓN