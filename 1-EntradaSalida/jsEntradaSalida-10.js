/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo);

	resultado = sueldo - ((25*sueldo)/100);
	document.getElementById("txtIdResultado").value = resultado
}
