/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura	
	var resultado

	temperatura = document.getElementById("txtIdTemperatura").value

	resultado = 5/9 * (temperatura - 32)

	alert(temperatura + " Farenheit son " + resultado + " Celcius.")
}

function CentigradosFahrenheit () 
{
	var temperatura	
	var resultado

	temperatura = document.getElementById("txtIdTemperatura").value

	resultado = (temperatura * 9/5) + 32

	alert(temperatura + " Celcius son " + resultado + " Farenheit.")
}
