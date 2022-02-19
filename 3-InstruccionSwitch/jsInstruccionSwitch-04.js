/* 
Dana Szumigraj DIV E
SWITCH Ej 4
*/

function mostrar()
{
	//tomo el mes
	var mes = document.getElementById("txtIdMes").value;
	var mensaje

	switch (mes)
	{
		case "Febrero":
		mensaje = "Este mes tiene 28 días";
		break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		mensaje = "Este mes tiene 30 días";
		break;

		default:
		mensaje = "Este mes tiene 31 días";
		break;
	}

	alert (mensaje);


}//FIN DE LA FUNCIÓN
//txtIdMes