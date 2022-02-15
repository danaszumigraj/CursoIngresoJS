function mostrar()
{
	var estacion = document.getElementById("txtIdEstacion").value
	var destino = document.getElementById("txtIdDestino").value
	var mensaje;

/*
	switch (estacion)
	{
		case "Invierno":
		if (destino == "Bariloche")
			{	
				alert("Se viaja")
			}
		else
			{	
				alert("No se viaja")
			}
		break;

		
		case "Verano":
		if (destino == "Mar del plata" || destino == "Cataratas") 
			{
				alert("Se viaja")
			}
		else
			{	
				alert("No se viaja")
			}
		break;

		case "Primavera":
		if (destino == "Bariloche")
			{	
				alert("No se viaja")
			}
		else
			{	
				alert("Se viaja")
			}
		break;

		default:
		alert("Se viaja")
	}
*/

switch (estacion)
{
	case "Invierno":
		switch(destino)
		{
			case "Bariloche":
				mensaje = "Se viaja";
			break;

			default:
				mensaje = "No se viaja";
			break;
		}
	break;

	case "Verano":
		switch(destino)
		{
			case "Mar del plata":
			case "Cataratas":
				mensaje = "Se viaja";
			break;

			default:
				mensaje = "No se viaja";
			break;
		}
	break;

	case "Primavera":
		switch(destino)
		{
			case "Bariloche":
				mensaje = "No se viaja";
			break;

			default:
				mensaje = "Se viaja";
			break;
		}
	break;

	default:
		mensaje = "Se viaja";
	break;
}

alert(mensaje);
}//FIN DE LA FUNCIÓN