/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var numeroIngresado;
	//var respuesta = "si";

	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		respuesta = prompt("Quiere ingresar otro numero?");

		if (respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Error, quiere ingresar otro numero? (si o no)");
		}
	}while(respuesta == "si")

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN (mati)
Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de estudiantes de la UTN hasta que el usuario quiera, 


1ERA PARTE
	informar :
	a)Cuántas mujeres hay .xxxxxx
	b)Cuántos con fiebre y cuantos sin fiebre.
	c)el promedio de edad por sexo.
2da PARTE
	informar :
	d)el primer alumno aprobado
	e)el nombre y edad la máxima temperatura 
	f)la altura y nota  del no binario mas joven
3ra PARTE
	informar :
	g)el nombre de la mujer más alta de las que aprobó
	h)el porcentaje de  personas que desaprobaron sobre el total
	i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.


*/


function mostrar()
{
	//VARIABLES
	var altura;
	var edad;
	var temperatura;
	var genero;
	var nota;
	var nombre;
	var respuesta;
	//PRIMERA PARTE
	var contadorMujeres = 0;
	var contadorEdadF = 0;
	var acumuladorF = 0;

	var contadorFiebre = 0;
	var contadorNoFiebre = 0;

	var contadorEdadM = 0;
	var acumuladorM = 0;
	var contadorEdadNb = 0;
	var acumuladorNb = 0;
	//SEGUNDA PARTE
	var banderaPrimerAprobado = 0;
	var nombrePrimerAprobado;

	var maxTemperatura = 0;
	var nombreMaxTemp;
	var edadMaxTemp;

	var alturaNbJoven;
	var notaNbJoven;
	var edadNbJoven;
	var banderaNbJoven = 0;
	//TERCERA PARTE
	var banderaMujerAlta = 0;
	var alturaMujerAlta;
	var nombreMujerAlta;

	var contadorNota = 0;
	var contadorDesaprobados = 0;

	var banderaMascDesaprobado = 0;
	var nombreMascDesaprobado;
	
	do
	{
		//ALTURA
		altura = parseInt(prompt("Ingrese la altura del estudiante en centimetros"));
		while(isNaN(altura)==true || altura>250 || altura < 100)
		{
			altura =parseInt(prompt("Error, ingrese correctamente la altura del estudiante en centimetros (hasta 250)"));
		}

		//EDAD
		edad = parseInt(prompt("Ingrese la edad del estudiante"));
		while(isNaN(edad)==true || edad >105 || edad < 17)
		{
			edad = parseInt(prompt("Error, ingrese correctamente la edad del estudiante"));
		}

		//TEMPERATURA
		temperatura = parseFloat(prompt("Ingrese la temperatura del estudiante"));
		while(temperatura < 35 || temperatura > 45 || isNaN(temperatura)==true)
		{
			temperatura = parseFloat(prompt("Error, ingrese la temperatura del estudiante (entre 35 y 45 grados)"));
		}
		if(temperatura > 38)
		{
			contadorFiebre++
		}
		else
		{
			contadorNoFiebre++
		}

		//GENERO
		genero = prompt("Ingrese el genero del estudiante (F, M o NB)");
		genero = genero.toLowerCase();
		while(genero!="f" && genero!="m" && genero!="nb")
		{
			genero = prompt("Error, ingrese el genero del estudiante (F, M o NB)");
			genero = genero.toLowerCase();
		}
		switch(genero)
		{
			case "f":
				contadorMujeres++
				contadorEdadF ++
				acumuladorF = acumuladorF + edad;
			break;
			case "m":
				contadorEdadM++
				acumuladorM = acumuladorM + edad;
			break;
			case "nb":
				contadorEdadNb++
				acumuladorNb = acumuladorNb + edad;
			break;	
		}

		//NOTA
		nota = parseInt(prompt("Ingrese la nota del estudiante"))
		while(isNaN(nota)==true || nota < 1 || nota > 10)
		{
			nota = parseInt(prompt("Error, ingrese correctamente la nota del estudiante (entre 1 y 10)"))
		}
		contadorNota++
		if(nota < 6)
		{
			contadorDesaprobados++
		}

		//NOMBRE
		nombre = prompt("Ingrese el nombre del estudiante");
		while(isNaN(nombre)==false)
		{
			nombre = prompt("Error, ingrese el nombre del estudiante");
		}

		//CALCULOS APARTE
		if (banderaPrimerAprobado == 0 && nota > 5)
		{
			nombrePrimerAprobado = nombre;
			banderaPrimerAprobado = 1;
		}

		if(maxTemperatura < temperatura)
		{
			maxTemperatura = temperatura;
			nombreMaxTemp = nombre;
			edadMaxTemp = edad;
		}
		switch(genero)
		{
			case "nb":
				if (banderaNbJoven == 0 || edadNbJoven > edad)
				{
					edadNbJoven = edad;
					alturaNbJoven = altura;
					notaNbJoven = nota;
					banderaNbJoven = 1;
				}
			break;
			case "f":
				if(banderaMujerAlta == 0  && nota > 5 || alturaMujerAlta < altura && nota > 5)
				{
					alturaMujerAlta = altura;
					nombreMujerAlta = nombre;
					banderaMujerAlta = 1;
				}
			case "m":
				if(banderaMascDesaprobado==0 && altura < 160 && nota < 6)
				{
					nombreMascDesaprobado = nombre;
					banderaMascDesaprobado = 1;
				}
			}
		
		respuesta = prompt("Quiere seguir ingresando datos?");
		respuesta = respuesta.toLowerCase();
		while(respuesta!="si" && respuesta!="no")
		{
			respuesta = prompt("Error, quiere seguir ingresando datos? (si o no)");
			respuesta = respuesta.toLowerCase();
		}

	}while(respuesta == "si")
	
	//A
	document.write("La cantidad de mujeres es: " + contadorMujeres + "<br>");
	//B
	document.write("Hay " + contadorFiebre + " estudiantes con fiebre y " + contadorNoFiebre + " estudiantes sin fiebre." + "<br>");
	//C
	document.write("El promedio de edad en mujeres es: " + (acumuladorF/contadorEdadF) + "<br>");
	document.write("El promedio de edad en hombres es: " + (acumuladorM/contadorEdadM) + "<br>");
	document.write("El promedio de edad en no binarios es: " + (acumuladorNb/contadorEdadNb) + "<br>");
	//D
	document.write("El primer alumno que aprobo es: " + nombrePrimerAprobado + "<br>");
	//E
	document.write("El alumno con mayor temperatura es " + nombreMaxTemp + " y su edad es " + edadMaxTemp + "<br>");
	//F
	document.write("La altura del no binario mas joven es " + alturaNbJoven + " centimetros y su nota es " + notaNbJoven + "<br>");
	//G
	document.write("El nombre de la mujer mas alta que aprobo es: " + nombreMujerAlta + "<br>");
	//H
	document.write("El porcentaje de desaprobados es: " + (contadorDesaprobados * 100 / contadorNota) + "%" + "<br>");
	//I
	document.write("El nombre del primer hombre desaprobado que mide menos de 160cm es: " + nombreMascDesaprobado + "<br>");

}