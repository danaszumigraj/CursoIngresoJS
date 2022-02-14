/* 
Dana Szumigraj DIV E
SWITCH Ej 1
*/

function mostrar()
{
	//tomo el mes
	var mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
			break;

		case "Marzo":
			mensaje = "a clases!!!.";
			break;

		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;

		case "Diciembre":
			mensaje = "Felices fiestas!!!."
			break;

		default:
			mensaje = "No hay eventos en este mes"

	}

	alert (mensaje);
		




}//FIN DE LA FUNCIÓN