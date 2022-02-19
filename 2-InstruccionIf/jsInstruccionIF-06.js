function mostrar()
{
	/*
	//tomo la edad  
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18)
	{
		alert("Es mayor de edad");
	}
	else if (edad >= 13 && edad <=17)
		{
			alert("Es adolescente");
		}
		else
		{
			alert("Es un niño");
		}
	*/

	/*
Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/

	var edad = parseInt(prompt("Ingrese su edad"));
	var resultado

	if (edad >= 70)
	{
		resultado = "Es anciano";
	}
	else 
	{
		if (edad >= 18 && edad < 70)
		{
		resultado = "Es mayor de edad";
		}
		else 
		{
			if (edad >= 13 && edad <=17)
			{
				resultado = "Es adolescente";
			}
		
			else 
			{
				if (edad < 13 && edad > 3)
			{
				resultado = "Es un niño";
			}
				else
				{
					resultado = "Es un bebe";
				}
			}
		}
	}

	document.getElementById("txtIdEdad").value = resultado;

}

//FIN DE LA FUNCIÓN
//txtIdEdad 