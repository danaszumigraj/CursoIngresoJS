function mostrar()
{
	var estacion
	var destino 
	var tarifa
	
	estacion = document.getElementById("txtIdEstacion").value
	destino = document.getElementById("txtIdDestino").value 
	tarifa = 15000

	switch(estacion)
	{
		case "Invierno":
		if(destino == "Bariloche")
		{
			alert( tarifa + ((20*tarifa)/100));
		}
		else if (destino == "Mar del plata") 
			{
			alert( tarifa - ((20*tarifa)/100));
			}
			else 
			{
			alert( tarifa - ((10*tarifa)/100));
			}
		break;

		case "Verano":
		if(destino == "Bariloche")
		{
			alert( tarifa - ((20*tarifa)/100));
		}
		else if (destino == "Mar del plata") 
			{
			alert( tarifa + ((20*tarifa)/100));
			}
			else 
			{
			alert( tarifa + ((10*tarifa)/100));
			}
		break;

		case "Primavera":
		case "Otoño":
		if(destino == "Cordoba")
		{
			alert(tarifa);
		}
		else  
			{
			alert( tarifa + ((10*tarifa)/100));
			}
		break;

	}



}//FIN DE LA FUNCIÓN
//alert( tarifa + ((20*tarifa)/100);