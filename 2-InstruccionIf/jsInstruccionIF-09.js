function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero
	var maximo = 10;
	var minimo = 1; 

	numero = Math.round(Math.random () * (maximo - minimo) + minimo);

	alert(numero);

}//FIN DE LA FUNCIÓN