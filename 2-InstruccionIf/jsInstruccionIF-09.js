function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var aleatorio = Math.random();
	var enteroAleatorio;
	

	enteroAleatorio = Math.floor(aleatorio * (10 - 1 + 1) + 1);

	alert(enteroAleatorio);

}//FIN DE LA FUNCIÓN