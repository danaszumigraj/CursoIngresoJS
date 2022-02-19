function mostrar()
{
	var estacion = document.getElementById("txtIdEstacion").value
	var destino = document.getElementById("txtIdDestino").value 
	var tarifa = 15000
	

	
/*
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

*/

switch(estacion)
{
	case "Invierno":
		switch(destino)
		{
			case "Bariloche":
				tarifa = tarifa - ((20*tarifa)/100);
			break;

			case "Mar del plata":
				tarifa = tarifa - ((20*tarifa)/100);
			break;

			default:
				tarifa = tarifa - ((10*tarifa)/100);
			break;
		}
		break;

	case "Verano":
		switch(destino)
		{
			case "Bariloche":
				tarifa = tarifa - ((20*tarifa)/100);
			break;

			case "Mar del plata":
				tarifa = tarifa + ((20*tarifa)/100);
			break; 

			default:
				tarifa = tarifa + ((10*tarifa)/100);
			break;
		}
	break;

	case "Primavera":
	case "Otoño":
		switch(destino)
		{
			case "Cordoba":
				tarifa = 15000
			break;

			default:
				tarifa = tarifa + ((10*tarifa)/100);
			break;
		}
	break;
}

	alert (tarifa);


}//FIN DE LA FUNCIÓN
//alert( tarifa + ((20*tarifa)/100);