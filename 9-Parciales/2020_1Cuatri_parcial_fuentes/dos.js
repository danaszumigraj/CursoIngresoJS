function mostrar()
{
  var nombrePaciente;
	var edadPaciente;
	var contadorEdadVacunaChina = 0;
	var contadorMenorDeEdad = 0;
	var promedioEdadVacunaChina;
	var vacunaAplicada;
	var contadorVacunaChina = 0;
	var contadorVacunaAmericana = 0;
	var dosis;
	var totalVacunados = 0;
	var vacunadosPrimerDosis = 0;
	var promedioVacunadosPrimerDosis;
	var genero;
	var primerMasculinoMasJoven = 0;
	var edadMasculinoMasJoven;
	var nombreMasculinoMasJoven;
	var vacunaMasculinoMasJoven;
	var respuesta = "si";

	while(respuesta == "si")
	{
		nombrePaciente = prompt("Ingrese el nombre del paciente");
		while(isNaN(nombrePaciente) == false)
		{
			nombrePaciente = prompt("Error, ingrese el nombre del paciente");
		}

		
		
		edadPaciente = prompt ("Ingrese la edad del paciente");
		while(isNaN(edadPaciente == true))
		{
			edadPaciente = ("Error, ingrese la edad del paciente (debe ser un numero)");
		}

		
		
		vacunaAplicada = prompt ("Ingrese la vacuna aplicada (“rusa”, “china”, “americana”)");
		while (vacunaAplicada != "rusa" || vacunaAplicada != "china" || vacunaAplicada != "americana")
		{
			vacunaAplicada = prompt("Error, ingrese correctamente la vacuna aplicada (“rusa”, “china”, “americana”)");

			while (edadPaciente > 11 && edadPaciente < 18 && vacunaAplicada != "americana")
				{
					vacunaAplicada = prompt("Error, los pacientes entre 12 y 17 años solo pueden recibir la vacuna americana");
				}
			
			switch (vacunaAplicada)
			{
				case "china":
					contadorEdadVacunaChina = contadorEdadVacunaChina + edadPaciente;
					contadorVacunaChina = contadorVacunaChina + 1;
				break;

				case "americana":
					contadorVacunaAmericana = contadorVacunaAmericana + 1
					if (edadPaciente < 18)
					{
						contadorMenorDeEdad = contadorMenorDeEdad + 1
					}
			}
		}
		totalVacunados = totalVacunados + 1;
		

		
		
		dosis = prompt("Ingrese la dosis aplicada (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)");
		while (dosis != "P" || dosis != "S")
		{
			dosis = prompt("Error, ingrese la dosis aplicada (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)");
		}

		if (dosis == "P")
		{
			vacunadosPrimerDosis = vacunadosPrimerDosis + 1;
		}

		
		
		genero = prompt ("Ingrese el genero del paciente (Femenino, Masculino)");
		while(genero != "Femenino" || genero != "Masculino")
		{
			genero = prompt ("Error, ingrese el genero del paciente (Femenino, Masculino)");

			if (primerMasculinoMasJoven = 0)
			{
				if (genero == "Masculino")
				{
					edadMasculinoMasJoven = edadPaciente;
					nombreMasculinoMasJoven = nombrePaciente
					primerMasculinoMasJoven = 1

				}
			}
			else if(edadMasculinoMasJoven > edadPaciente)
			{
				nombreMasculinoMasJoven = nombrePaciente;
				edadMasculinoMasJoven = edadPaciente;
				vacunaMasculinoMasJoven = vacunaAplicada;
			}
			
		}

		
		
		respuesta = prompt("Quiere ingresar mas datos?");
	}

	
	
		promedioEdadVacunaChina = contadorEdadVacunaChina / contadorVacunaChina;

		porcentajeMenoresDeEdad = contadorMenorDeEdad * 100 / contadorVacunaAmericana;

		promedioVacunadosPrimerDosis = vacunadosPrimerDosis * 100 / totalVacunados;

}
