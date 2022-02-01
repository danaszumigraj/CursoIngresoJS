/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

function Sumar () 
{

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

	resultado = precioUno + precioDos + precioTres

	alert("La suma es " + resultado)
}
function Promedio () 
{

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

	resultado = (precioUno + precioDos + precioTres) / 3

	alert("El promedio es " + resultado)
	
}
function PrecioFinal () 
{
	var impuesto;

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

	resultado = precioUno + precioDos + precioTres
	impuesto = 21 / 100

	resultado = resultado + (resultado * impuesto)

	alert("El precio final es " + resultado)

}