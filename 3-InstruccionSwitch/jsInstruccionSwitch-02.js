/* 
Dana Szumigraj DIV E
SWITCH Ej 2
*/

function mostrar()
{
	//tomo el mes
	var mes = document.getElementById("txtIdMes").value;
	var mensaje;

	switch(mes)
	{
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		mensaje = "Falta para el invierno.";
		break;

		case "Julio":
		case "Agosto":
		mensaje = "Abrigate que hace frio.";
		break;

		default:
		mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;

	}

	alert (mensaje);
	




}//FIN DE LA FUNCIÓN