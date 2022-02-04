/*
Dana Szumigraj DIV E
E/S ej10 y 10bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*var sueldo;
	var resultado;
	var descuento;

	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo);

	descuento = 25/100;
	resultado = sueldo - (sueldo * descuento);
	document.getElementById("txtIdResultado").value = resultado*/

	var sueldo = parseFloat(document.getElementById("txtIdImporte").value);
	var descuento = prompt("Ingrese el descuento")
	var resultado

	descuento = (sueldo * descuento / 100);
	resultado = sueldo - descuento;
	
	alert("Su importe es " + sueldo + ", el descuento es de " + descuento + " y su importe con descuento es " + resultado);
}
