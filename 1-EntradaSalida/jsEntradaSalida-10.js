/*
Dana Szumigraj DIV E
E/S ej10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var descuento;

	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo);

	descuento = 25/100;
	resultado = sueldo - (sueldo * descuento);
	document.getElementById("txtIdResultado").value = resultado
}
