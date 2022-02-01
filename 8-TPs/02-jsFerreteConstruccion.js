/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var hiloAlambre;
	var resultado;

	largoTerreno = document.getElementById("txtIdLargo").value;
	anchoTerreno = document.getElementById("txtIdAncho").value;

	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = parseFloat(anchoTerreno);

	hiloAlambre = 3;
	largoTerreno = largoTerreno * 2;
	anchoTerreno = anchoTerreno * 2;

	resultado = (largoTerreno + anchoTerreno) * hiloAlambre;

	alert("La cantidad de hilos a comprar es " + resultado);



}
function Circulo () 
{
	var radioTerreno;
	var circunferencia
	var hiloAlambre;
	var resultado;

	radioTerreno = document.getElementById("txtIdRadio").value;

	radioTerreno = parseFloat(radioTerreno);

	hiloAlambre = 3;
	
	circunferencia = radioTerreno * 2 * 3,14;
	resultado = circunferencia * hiloAlambre

	alert("La cantidad de hilos a comprar es " + resultado);
}
function Materiales () 
{
	var largoTerreno
	var anchoTerreno
	var areaTerreno
	var bolsaCemento
	var bolsaCal

	largoTerreno = document.getElementById("txtIdLargo").value;
	anchoTerreno = document.getElementById("txtIdAncho").value;

	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = parseFloat(anchoTerreno);

	areaTerreno = largoTerreno*anchoTerreno;

	bolsaCemento = 2*areaTerreno;
	bolsaCal = 3*areaTerreno;

	bolsaCemento = parseInt(bolsaCemento);
	bolsaCal = parseInt(bolsaCal);

	alert("Será necesario comprar " + bolsaCemento + (" bolsa(s) de cemento y ") + bolsaCal + (" bolsa(s) de cal."))



	
}