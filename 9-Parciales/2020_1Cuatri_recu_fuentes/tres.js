/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/

function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;

	var banderaMayorTemp = 0;
	var nacionalidadMasTemp;
	var mayorTemp = 0;

	var mayorSoltero = 0;

	var mujerSoltera = 0;
	var mujerViuda = 0;

	var mayoresSesenta = 0;

	var mujerCasada = 0;
	var acumEdadMujerCasada = 0;

	do{

		//NOMBRE
		nombre = prompt("Ingrese un nombre")
		while(isNaN(nombre==false))
		{
			nombre = prompt("Error, ingrese un nombre")
		}

		//NACIONALIDAD
		nacionalidad = prompt("Ingrese la nacionalidad")
		while(isNaN(nacionalidad==false))
		{
			nacionalidad = prompt("Error, ingrese la nacionalidad")
		}

		//EDAD
		edad = parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad)==true || edad < 0 || edad > 110)
		{
			edad = parseInt(prompt("Error, ingrese correctamente la edad (debe ser un numero)"));
		}

		//SEXO
		sexo = prompt("Ingrese el genero ( f o m)");
		sexo = sexo.toLowerCase();
		while(sexo!= "f" && sexo!= "m")
		{
			sexo = prompt("Error, ingrese el genero ( f o m)");
			sexo = sexo.toLowerCase();
		}

		//ESTADO CIVIL
		estadoCivil = prompt("Ingrese el estado civil (soltero, casado o viudo)");
		estadoCivil = estadoCivil.toLowerCase();
		while(estadoCivil!="soltero" && estadoCivil!= "casado" && estadoCivil!= "viudo")
		{
			estadoCivil = prompt("Ingrese el estado civil (soltero, casado o viudo)");
			estadoCivil = estadoCivil.toLowerCase();
		}

		//TEMPERATURA
		temperatura = parseFloat(prompt("Ingrese la temperatura"));
		while(temperatura < 35 || temperatura > 45)
		{
			temperatura = parseFloat(prompt("Ingrese una temperatura valida (entre 35 y 45)"));
		}

		//LOGICA

		if (banderaMayorTemp == 0 || mayorTemp < temperatura)
		{
			nacionalidadMasTemp = nacionalidad;
			mayorTemp = temperatura;
			banderaMayorTemp = 1
		}
		
		switch(estadoCivil)
		{
			case "soltero":
				if (edad > 17 && sexo == "f")
				{
					mayorSoltero++
					mujerSoltera++
				}
				else if (edad>17)
					{
						mayorSoltero++
					}
			break;
			case "casado":
				if (sexo == "f")
				{
					mujerCasada++
					acumEdadMujerCasada = acumEdadMujerCasada + edad;
				}
			break;
			case "viudo":
				if (sexo == "f")
				{
					mujerViuda++
				}
			break;	
		}

		if (edad > 60 && temperatura > 38)
		{
			mayoresSesenta++
		}
		
		
		respuesta = prompt("quiere seguir ingresando datos?");
		respuesta = respuesta.toLowerCase();
		while(respuesta!="si" && respuesta !="no")
		{
			respuesta = prompt("Error, quiere seguir ingresando datos? (si o no)");
			respuesta = respuesta.toLowerCase();
		}

	}while(respuesta == "si")

	//A
	document.write("La nacionalidad de la persona con mayor temperatura es " + nacionalidadMasTemp + "<br>");
	//B
	document.write("La cantidad de mayores de edad que estan solteros es " + mayorSoltero + "<br>");
	//C
	document.write("La cantidad de mujeres solteras es " + mujerSoltera + " y la cantidad de viudas es " + mujerViuda + "<br>");
	//D
	document.write("La cantidad de mayores de 60 con mas de 38 de temp es " + mayoresSesenta + "<br>");
	//E
	document.write("El promedio de edad de mujeres casadas es " + (acumEdadMujerCasada/mujerCasada) + "<br>");
}	
