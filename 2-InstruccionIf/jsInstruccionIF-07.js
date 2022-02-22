function mostrar()
{
	
	
	
	/*//tomo la edad  
	var edad;
	var estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if (edad < 18 && estado != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}*/
	
	var edad = parseInt(document.getElementById("txtIdEdad").value);
	var nombre = prompt("Ingrese su nombre");
	var mensaje;

	if (edad < 13)
	{
		mensaje = "Feliz dia";
		if (nombre == "Ricardo")
		{
			mensaje = mensaje + ". Muy chiquito para ese nombre";
		}
	}
	else if (edad < 18)
	{
		mensaje = "Usted es adolescente";
		if(edad == 17)
			{
				mensaje = mensaje + ", ultimo año!!!";
			}
		if (nombre == "Violeta")
			{
				mensaje = mensaje + "Como el color!!"
			}
	}
		else
		{
			mensaje = "Tenes edad de laburar"
			if (edad == 33)
			{
				mensaje = mensaje + ", como cristo";
			}
			else if (edad > 60)
				{
					mensaje = "A jubilarse";
					if (nombre == "Alfredo")
					{
						mensaje = mensaje + ", como el de QUEEN"
					}
				}
				else if (edad == 88)
				{
					mensaje = "lindo numero";
				}
		}
	
	if (edad % 2 == 0)
	{
		mensaje = mensaje + ", sos par!!"
	}

	alert (mensaje);


}//FIN DE LA FUNCIÓN