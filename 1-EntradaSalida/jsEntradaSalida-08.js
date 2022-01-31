/*
Dana Szumigraj DIV E
E/S ej8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo
	var divisor
	var resultado

	dividendo = document.getElementById("txtIdNumeroDividendo").value
	divisor = document.getElementById("txtIdNumeroDivisor").value

	divisor = parseInt(divisor)
	dividendo = parseInt(dividendo)

	resultado = dividendo % divisor

	alert("El resto es " + resultado);
}


//txtIdNumeroDividendo
//txtIdNumeroDivisor