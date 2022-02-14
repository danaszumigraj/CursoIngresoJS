/* 
Dana Szumigraj DIV E
SWITCH Ej 3
*/

function mostrar()
{
	//tomo el mes
	var mes =document.getElementById("txtIdMes").value
	var mensaje;

	switch (mes)
	{
		case "Febrero":
		mensaje = "Este mes no tiene más de 29 días.";
		break;

		default:
		mensaje = "Este mes tiene 30 o más días";
		break;
	}

	alert (mensaje);
	


}//FIN DE LA FUNCIÓN
//txtIdMes