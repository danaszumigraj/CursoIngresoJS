/*
Dana Szumigraj DIV E
E/S ej9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*var sueldo;
	var resultado;
	var aumento;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	aumento = 10/100;
	resultado = sueldo + (sueldo * aumento);
	document.getElementById("txtIdResultado").value = resultado*/

	
	var sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	var aumento = parseInt(prompt ("Ingrese el porcentaje de aumento"));
	var resultado

	resultado = sueldo + (sueldo * aumento / 100);
	document.getElementById("txtIdResultado").value = resultado



}

//txtIdSueldo
//txtIdResultado
