/*2. Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las
personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)
Informar:
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna más inoculada*/

function mostrar()
{
  var nombre;
  var edad;
  var vacuna;
  var dosis;
  var genero;
  var respuesta;

  var contadorVacunaChina = 0;
  var acumuladorEdad = 0;

  var banderaMasculinoJoven = 0;
  var edadMasculinoJoven;
  var masculinoJoven;
  var vacunaMasculinoJoven;

  var contadorAmericana = 0;
  var contadorMenores = 0;

  var banderaPrimerDosis = 0;
  var contadorPrimerDosis = 0;
  var contadorDosis = 0;

  var contadorRusa = 0;
  var vacunaMasInoculada;
  

  do
  {
	nombre = prompt("Ingrese el nombre del paciente");
	nombre = nombre.toLowerCase;
	while(isNaN(nombre)==false)
	{
		nombre = prompt("Error, ingrese el nombre del paciente");
		nombre = nombre.toLowerCase;
	}

	edad = parseInt(prompt("Ingrese la edad del paciente"));
	while(isNaN(edad)==true)
	{
		edad = parseInt(prompt("Error, ingrese la edad del paciente (debe ser un numero)"));
	}

	vacuna = prompt("Ingrese la vacuna aplicada (rusa, china o americana)");
	vacuna = vacuna.toLowerCase;
	while(isNaN(vacuna)==false || vacuna != "rusa" && vacuna != "china" && vacuna != "americana")
	{
		vacuna = prompt("Error, ingrese la vacuna aplicada (rusa, china o americana)");
		vacuna = vacuna.toLowerCase;

		while(edad > 11 && edad < 18)
		{
			if (vacuna == "china" || vacuna == "rusa")
			{
				vacuna = prompt("Error, los pacientes entre 12 y 17 años solo pueden recibir la vacuna americana");
				vacuna = vacuna.toLowerCase;
			}
		}
	}
	switch(vacuna)
	{
		case "china":
			contadorVacunaChina++
			acumuladorEdad = acumuladorEdad + edad;
		break;
	
		case "americana":
		
			contadorAmericana++
			if (edad < 18)
			{
				contadorMenores++
			}
		break;
		case "rusa":
			contadorRusa++
		break;
	}

	dosis = prompt("Ingrese la dosis aplicada (P o S)");
	dosis = dosis.toLowerCase;
	while(isNaN(dosis==false) || dosis!="p" && dosis!="s")
	{
		dosis = prompt("Error, ingrese la dosis aplicada (P o S)");
	dosis = dosis.toLowerCase;
	}
	contadorDosis++
	if(banderaPrimerDosis == 0 || dosis == "p")
	{
		contadorPrimerDosis++
	}

	genero = prompt("Ingrese el genero del paciente (Femenino o Masculino)");
	genero = genero.toLowerCase;
	while(isNaN(genero)==false || genero!="femenino" && genero!="masculino")
	{
		genero = prompt("Error, ingrese el genero del paciente (Femenino o Masculino)");
		genero = genero.toLowerCase;
	}

	if(genero == "masculino")
	{
		if(banderaMasculinoJoven == 0 || edad < edadMasculinoJoven)
		{
			edadMasculinoJoven = edad;
			masculinoJoven = nombre;
			vacunaMasculinoJoven = vacuna;
			banderaMasculinoJoven = 1;
		}
	}


	respuesta = prompt("Quiere seguir ingresando datos?");
	respuesta = respuesta.toLowerCase;
	while (respuesta!="si" && respuesta!= "no")
	{
		respuesta = prompt("Error, quiere seguir ingresando datos? (si o no)");
		respuesta = respuesta.toLowerCase;
	}

  }while(respuesta == "si")

  if (contadorVacunaChina > contadorAmericana)
	{
		vacunaMasInoculada = contadorVacunaChina;
	}
	else if(contadorAmericana > contadorRusa)
		{
			vacunaMasInoculada = contadorAmericana;
		}
		else
		{
			vacunaMasInoculada = contadorRusa;
		}
  
  //A
  document.write("El promedio de edad de los que se vacunaron con la china es: " + (acumuladorEdad/contadorVacunaChina) + "<br>");
  //B
  document.write("El nombre del masculino mas joven es " + masculinoJoven + " y se aplico la vacuna " + vacunaMasculinoJoven + "<br>");
  //C
  document.write("El porcentaje de menores de edad que recibieron la americana es: " + (contadorMenores * 100 / contadorAmericana) + "<br>");
  //D
  document.write("El porcentaje de los vacunados con la primer dosis es: " + (contadorPrimerDosis * 100 / contadorDosis) + "<br>");
  //E
  document.write("La vacuna mas inoculada es: " + vacunaMasInoculada + "<br>");


}
