/*
Dana Szumigraj DIV E
E/S ej1
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	/* //muestra una ventana emergente con el mensaje
	alert("Esto funciona de maravilla");*/

	var cantidadCometas = 10
	var diametroMayor = parseFloat((prompt("Ingrese diámetro mayor")) / 100);
	var diametroMenor = parseFloat((prompt ("Ingrese diámetro menor")) / 100);
	var ladosMenores = parseFloat((prompt ("Ingrese lado menor")) / 100);
	var ladosMayores = parseFloat((prompt ("Ingrese lado mayor")) / 100);
	var varillaPlastico = (diametroMayor + diametroMenor + ladosMenores * 2 + ladosMayores * 2) * cantidadCometas;
	
	var alturaMenor = Math.sqrt(ladosMenores^2 - (diametroMenor / 2));
	var alturaMayor =  Math. sqrt(ladosMayores^2 - (diametroMenor / 2));
	var areaMenor = ((diametroMenor / 2) * alturaMenor) / 2; 
	var areaMayor = ((diametroMenor / 2) * alturaMayor) / 2;
	var areaCometa = areaMenor * 2 + areaMayor * 2
	var colaCometa = areaCometa * 10/100
	var papelTotal = (areaCometa + colaCometa) * cantidadCometas
	var papelColor = (areaMenor + areaMayor) * cantidadCometas
	

	
	alert("Serán necesarios " + varillaPlastico + "Mts de varillas de plastico y " + papelTotal + "Mts2 de papel. Para el cometa bicolor, serán necesarios " + papelColor + "Mts2 de cada color.");

	




}