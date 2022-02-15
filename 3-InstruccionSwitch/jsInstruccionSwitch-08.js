function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value
	var mensaje

	switch (destinoIngresado)
	{
		case "Bariloche":
		mensaje = "FRIO";
		break;

		case "Cataratas":
		mensaje = "CALOR";
		break;

		case "Mar del plata":
		mensaje = "CALOR";
		break;

		case "Ushuaia":
		mensaje = "FRIO";
		break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN